const express = require("express");
const router = express.Router();
const db = require("../db/db"); 

router.post("/login", (req, res) => {
  const { cgm, password, typeAccount } = req.body;
  console.log("chegou na rota login");
  console.log("REQ BODY:", req.body);

  const query = `
    SELECT * FROM Users
    WHERE cgm = ? AND password = ? AND typeAccount = ?
  `;

  db.get(query, [cgm, password, typeAccount], (err, row) => {
    console.log("ERRO DO SELECT:", err);
    console.log("RESULTADO DO BANCO:", row);

    if (err) {
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (!row) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    res.json({ message: "Login bem-sucedido", user: row });
  });
});

module.exports = router;
