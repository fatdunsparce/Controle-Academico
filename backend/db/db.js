const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const DB_PATH = "./controle_academico.db";

if (!fs.existsSync("./db")) {
    fs.mkdirSync("./db");
}

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error("Erro ao abrir o banco:", err.message);
    } else {
        console.log("Banco conectado!");
    }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        cgm TEXT,
        password TEXT,
        typeAccount TEXT,
        isActive INTEGER
    )`);

    db.get("SELECT COUNT(*) AS total FROM Users", (err, row) => {
        if (err) {
            console.error("Erro ao verificar usuários:", err.message);
            return;
        }

        if (row.total === 0) {
            db.run(`
                INSERT INTO Users (name, email, cgm, password, typeAccount, isActive)
                VALUES 
                ("Karoliny", "kakau@teste.com", "123456", "1234", "student", 1),
                ("Maria", "maria@teste.com", "654321", "4321", "teacher", 1)
            `);

            console.log("Usuários iniciais inseridos!");
        }
    });
});

module.exports = db;
