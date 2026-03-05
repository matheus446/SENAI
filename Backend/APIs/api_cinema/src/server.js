// const pool = require('./config/database')
// const app = require('./app')

// const PORT = 3000

// pool.getConnection((err, connection) => {
//     if(err){
//         console.error('erro ao conectar ao banco:', err)
//         process.exit(1)
//     }
//     console.log('conectado ao MYSQL')
//     connection.release()
// })

// app.listen(PORT, ()=>{
//     console.log('servidor rodando!!!')
// })



const app = require('./app');
const pool = require('./config/database');

const PORT = 3000;

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar no banco:', err);
        process.exit(1);
    }

    console.log('Conectado ao MySQL com sucesso! 🎉');
    connection.release();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});