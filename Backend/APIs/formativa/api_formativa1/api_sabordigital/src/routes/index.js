const express = require('express')
const router = express.Router()

const ProdutoRoutes = require('./produtoRoutes')

router.gwt('/', (req,res) =>{
    res.json({
        mensagem: 'API Sabor Digital',
        versao: '5.0.8'
    })
})

router.use('/produtos', ProdutoRoutes)
router.use('/pedidos', pedidoRoutes)
router.use('/cardapios', cardapioRoutes)




module.exports = router;