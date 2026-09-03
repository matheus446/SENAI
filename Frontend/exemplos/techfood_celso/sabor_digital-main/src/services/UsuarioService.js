const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {

    async registrarUsuario(dados) {

        const { nome, email, senha } = dados;

        if (!nome || !email || !senha) {
            throw {
                status: 400,
                mensagem: 'Nome, email e senha são obrigatórios'
            };
        }

        if (senha.length < 6) {
            throw {
                status: 400,
                mensagem: 'A senha deve ter pelo menos 6 caracteres'
            };
        }

        const emailNormalizado = email.trim().toLowerCase();

        const usuarioExistente =
            await UsuarioRepository.findByEmail(emailNormalizado);

        if (usuarioExistente) {
            throw {
                status: 409,
                mensagem: 'Este email já está cadastrado'
            };
        }

        const salt = await bcrypt.genSalt(10);

        const senhaHash = await bcrypt.hash(senha, salt);

        // Todo usuário criado pelo cadastro público será cliente.
        const papel = 'cliente';

        const id = await UsuarioRepository.create({
            nome: nome.trim(),
            email: emailNormalizado,
            senha: senhaHash,
            papel
        });

        return {
            sucesso: true,
            mensagem: 'Usuário registrado com sucesso',
            id
        };
    }

    async login(email, senha) {

        if (!email || !senha) {
            throw {
                status: 400,
                mensagem: 'Email e senha são obrigatórios'
            };
        }

        const emailNormalizado = email.trim().toLowerCase();

        const usuario =
            await UsuarioRepository.findByEmail(emailNormalizado);

        if (!usuario) {
            throw {
                status: 401,
                mensagem: 'Email ou senha incorretos'
            };
        }

        const senhaCorreta =
            await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            throw {
                status: 401,
                mensagem: 'Email ou senha incorretos'
            };
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                papel: usuario.papel
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '8h'
            }
        );

        return {
            sucesso: true,
            mensagem: 'Login realizado com sucesso',
            token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                papel: usuario.papel
            }
        };
    }
}

module.exports = new UsuarioService();