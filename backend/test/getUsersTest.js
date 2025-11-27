const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./controle_academico.db", (err) => {
    if (err) {
        console.error("Erro ao abrir o banco:", err.message);
        return;
    }
    console.log("Banco conectado com sucesso!");
});

db.all("SELECT * FROM Users", (err, rows) => {
    if (err) {
        console.error("Erro ao consultar tabela:", err.message);
        return;
    }
    console.log("Resultado da consulta:");
    console.log(rows);
    
});
