const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            sucesso: false,
            mensagem: 'Token não fornecido'
        });
    }

    const partes = authHeader.split(' ');

    if (partes.length !== 2 || partes[0] !== 'Bearer') {
        return res.status(401).json({
            sucesso: false,
            mensagem: 'Formato do token inválido'
        });
    }

    const token = partes[1];

    try {

        const decodificado =
            jwt.verify(token, process.env.JWT_SECRET);

        req.usuario = decodificado;

        next();

    } catch (erro) {

        return res.status(401).json({
            sucesso: false,
            mensagem: 'Token inválido ou expirado'
        });
    }
};


const verificarAdmin = (req, res, next) => {

    if (!req.usuario || req.usuario.papel !== 'admin') {

        return res.status(403).json({
            sucesso: false,
            mensagem: 'Acesso restrito para administradores'
        });
    }

    next();
};


module.exports = {
    verificarToken,
    verificarAdmin
};