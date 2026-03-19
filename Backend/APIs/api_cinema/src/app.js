const express = require('express')
const pool = require('./config/database')

const app = express()
app.use(express.json())

const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err) reject(err)
            else resolve(results)
        })
    })
}

app.get('/', (req,res) => {
    res.send("API CINEMA")
})

/* ================= FILMES ================= */

app.get('/filmes', async (req,res) => {
    try {
        const filmes = await queryAsync('SELECT * FROM filme')

        res.json({
            sucesso: true,
            dados: filmes,
            total: filmes.length
        })
    } catch (erro) {
        res.status(500).json({ sucesso:false, mensagem:'Erro ao listar filmes', erro: erro.message })
    }
})

app.get('/filmes/:id', async (req,res) => {
    try {
        const { id } = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({ sucesso:false, mensagem:'ID inválido' })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

        if(filme.length === 0){
            return res.status(404).json({ sucesso:false, mensagem:'Filme não encontrado' })
        }

        res.json({ sucesso:true, dados: filme[0] })

    } catch (erro) {
        res.status(500).json({ sucesso:false, mensagem:'Erro', erro: erro.message })
    }
})

app.post('/filmes', async(req,res) =>{
    try {
        const { titulo, genero, duracao, classificacao, data_lancamento } = req.body

        if(!titulo || !genero || !duracao){
            return res.status(400).json({ sucesso:false, mensagem:'Campos obrigatórios' })
        }

        const resultado = await queryAsync('INSERT INTO filme SET ?', [{
            titulo, genero, duracao, classificacao, data_lancamento
        }])

        res.status(201).json({ sucesso:true, id: resultado.insertId })

    } catch (erro) {
        res.status(500).json({ sucesso:false, erro: erro.message })
    }
})

app.put('/filmes/:id', async (req,res) =>{
    try {
        const { id } = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({ sucesso:false })
        }

        await queryAsync('UPDATE filme SET ? WHERE id = ?', [req.body, id])

        res.json({ sucesso:true })

    } catch (erro) {
        res.status(500).json({ sucesso:false })
    }
})

app.delete('/filmes/:id', async (req,res) =>{
    try {
        const { id } = req.params

        await queryAsync('DELETE FROM filme WHERE id = ?', [id])

        res.json({ sucesso:true })

    } catch (erro) {
        res.status(500).json({ sucesso:false })
    }
})

/* ================= SALAS ================= */

app.get('/salas', async (req,res) => {
    try {
        const salas = await queryAsync('SELECT * FROM sala')

        res.json({
            sucesso: true,
            dados: salas,
            total: salas.length
        })
    } catch (erro) {
        res.status(500).json({ sucesso:false, erro: erro.message })
    }
})

app.get('/salas/:id', async (req,res) => {
    try {
        const { id } = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({ sucesso:false })
        }

        const sala = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if(sala.length === 0){
            return res.status(404).json({ sucesso:false })
        }

        res.json({ sucesso:true, dados: sala[0] })

    } catch (erro) {
        res.status(500).json({ sucesso:false })
    }
})

app.post('/salas', async (req,res) => {
    try {
        const { nome, capacidade } = req.body

        const resultado = await queryAsync('INSERT INTO sala SET ?', [{ nome, capacidade }])

        res.status(201).json({ sucesso:true, id: resultado.insertId })

    } catch (erro) {
        res.status(500).json({ sucesso:false })
    }
})

app.put('/salas/:id', async (req,res) => {
    try {
        const { id } = req.params

        await queryAsync('UPDATE sala SET ? WHERE id = ?', [req.body, id])

        res.json({ sucesso:true })

    } catch (erro) {
        res.status(500).json({ sucesso:false })
    }
})

app.delete('/salas/:id', async (req,res) => {
    try {
        const { id } = req.params

        await queryAsync('DELETE FROM sala WHERE id = ?', [id])

        res.json({ sucesso:true })

    } catch (erro) {
        res.status(500).json({ sucesso:false })
    }
})

module.exports = app