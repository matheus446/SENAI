const express = require('express');
const pool = require('./config/database');

const app = express();
app.use(express.json());

/* ROTA TESTE */
app.get('/', (req, res) => {
    res.json({ sucesso: true, mensagem: "API SaborDigital funcionando!" });
});

/* GET */
app.get('/produtos', async (req, res) => {
    try {
        const [produtos] = await pool.query(
            'SELECT * FROM produto ORDER BY id DESC'
        );

        res.json({ sucesso: true, dados: produtos });

    } catch (erro) {
        res.json({ sucesso: false, mensagem: erro.message });
    }
});

/* GET */
app.get('/produtos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.json({ sucesso: false, mensagem: "ID inválido" });
        }

        const [produto] = await pool.query(
            'SELECT * FROM produto WHERE id = ?',
            [id]
        );

        if (produto.length === 0) {
            return res.json({ sucesso: false, mensagem: "Produto não encontrado" });
        }

        res.json({ sucesso: true, dados: produto[0] });

    } catch (erro) {
        res.json({ sucesso: false, mensagem: erro.message });
    }
});

/* POST */
app.post('/produtos', async (req, res) => {
    try {
        const { nome, descricao, preco, disponivel } = req.body;

        if (!nome || !descricao || preco == null || disponivel == null) {
            return res.json({ sucesso: false, mensagem: "Campos obrigatórios faltando" });
        }

        if (preco <= 0) {
            return res.json({ sucesso: false, mensagem: "Preço inválido" });
        }

        const [resultado] = await pool.query(
            `INSERT INTO produto (nome, descricao, preco, disponivel)
             VALUES (?, ?, ?, ?)`,
            [nome, descricao, preco, disponivel]
        );

        res.json({ sucesso: true, dados: resultado });

    } catch (erro) {
        res.json({ sucesso: false, mensagem: erro.message });
    }
});

/* PUT */
app.put('/produtos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { nome, descricao, preco, disponivel } = req.body;

        const [produto] = await pool.query(
            'SELECT * FROM produto WHERE id = ?',
            [id]
        );

        if (produto.length === 0) {
            return res.json({ sucesso: false, mensagem: "Produto não encontrado" });
        }

        await pool.query(
            `UPDATE produto 
             SET nome = COALESCE(?, nome),
                 descricao = COALESCE(?, descricao),
                 preco = COALESCE(?, preco),
                 disponivel = COALESCE(?, disponivel)
             WHERE id = ?`,
            [nome, descricao, preco, disponivel, id]
        );

        res.json({ sucesso: true, mensagem: "Produto atualizado com sucesso" });

    } catch (erro) {
        res.json({ sucesso: false, mensagem: erro.message });
    }
});

/* DELETE*/
app.delete('/produtos/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        const [produto] = await pool.query(
            'SELECT * FROM produto WHERE id = ?',
            [id]
        );

        if (produto.length === 0) {
            return res.json({ sucesso: false, mensagem: "Produto não encontrado" });
        }

        await pool.query(
            'DELETE FROM produto WHERE id = ?',
            [id]
        );

        res.json({ sucesso: true, mensagem: "Produto removido com sucesso" });

    } catch (erro) {
        res.json({ sucesso: false, mensagem: erro.message });
    }
});
module.exports = app;