const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend funcionando!");
});

app.get("/cotacao/:moeda", async (req, res) => {
    try {
        const moeda = req.params.moeda;

        const response = await axios.get(
            `https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao buscar cotação da moeda."
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});