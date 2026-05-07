// =============================================================================
// ROTA DE AGENDAMENTOS
// =============================================================================


app.put('/reservas/:id', async (req, res) => {
  try {
    const { id } = req.params.id_reserva;
    const dados = req.body;

    const reserva = await queryAsync("SELECT * FROM reserva WHERE id = ?", [
      id,
    ]);

    if (!validarExistencia(reserva, res, "Reserva")) {
      return;
    }

    if (!validarDadosAtualizados(dados, res)) {
      return;
    }
    await queryAsync("UPDATE reservas SET ? WHERE id = ?", [dados, id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "reserva atualizada",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});

function mensagem(res, tipo) {
    res.status(404).json({
        sucesso: false,
        mensagem: `${tipo} não encontrada.`
    })
}

function validarExistencia(resultado, res, tipo) {
    if (resultado.length === 0) {
        mensagem(res, tipo)
        return false
    }
    return true
}

app.get('/usuario', async (req, res) => {
    try{
        const listaReservas = await queryAsync("SELECT * FROM reserva")
        res.status(200).json({
            sucesso: true,
            dados: listaReservas
        })
    } catch (erro) {
        res.status(500).json({
            sucesso: false,
            mensagem: erro
        })
    }
})


app.get('/reservas/data/:id', async (req, res) => {
    try{
        const {id} = req.params
        const reserva = await queryAsync("SELECT * FROM reserva WHERE id = ?", [id])

        if (!validarExistencia(reserva, res, "Reserva")) {
            return
        }

        res.status(200).json({
            sucesso: true,
            dados: reserva[0]
        })
    } catch (erro) {
        escape.status(500).json({
            sucesso: false,
            mensagem: erro
        })
    }
})

// NOTA: Falta fazer o filtro de busca por data aqui
