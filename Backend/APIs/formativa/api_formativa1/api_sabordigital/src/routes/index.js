const express = require("express");

const router = express.Router();

const ProdutoRoutes = require("./produtoRoutes");

/*
    Rota principal
*/
router.get("/", (req, res) => {
  res.json({
    mensagem: "API Sabor Digital",
    versao: "5.0.8",
  });
});

/*
    Rotas
*/
router.use("/produtos", ProdutoRoutes);

/*

COMENTE ISSO SE OS ARQUIVOS NÃO EXISTIREM

const pedidoRoutes = require("./pedidoRoutes");
const cardapioRoutes = require("./cardapioRoutes");

router.use("/pedidos", pedidoRoutes);
router.use("/cardapios", cardapioRoutes);

*/

module.exports = router;
