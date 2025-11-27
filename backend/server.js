const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const loginRoute = require("./routes/auth");

console.log("chegou no server.js");

app.use("/", loginRoute);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
