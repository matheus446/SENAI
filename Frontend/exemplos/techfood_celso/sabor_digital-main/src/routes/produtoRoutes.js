const express = require('express');

const router = express.Router();

const ProdutoController =
    require('../controllers/ProdutoController');

const upload =
    require('../config/multer');

const {
    verificarToken, 
    verificarAdmin
} = require('../middlewares/authMiddleware');


// Rotas públicas

router.get('/', ProdutoController.listar);

router.get('/:id', ProdutoController.buscarPorId);


// Rotas protegidas

router.post(
    '/',
    verificarToken,
    verificarAdmin,
    upload.single('imagem'),
    ProdutoController.cadastrar
);

router.put(
    '/:id',
    verificarToken,
    verificarAdmin,
    upload.single('imagem'),
    ProdutoController.atualizar
);

router.delete(
    '/:id',
    verificarToken,
    verificarAdmin,
    ProdutoController.deletar
);


module.exports = router;