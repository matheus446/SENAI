document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-cadastro");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const preco = document.getElementById("preco").value;
    const categoria = document.getElementById("categoria").value.trim();
    const imagem = document.getElementById("imagem").files[0];

    if (!nome || !descricao || !preco || !imagem) {
      mensagem.textContent = "Preencha todos os campos obrigatórios.";
      mensagem.style.color = "red";
      return;
    }

    try {
      const formData = new FormData();

      formData.append("nome", nome);
      formData.append("descricao", descricao);
      formData.append("preco", preco);
      formData.append("categoria", categoria);
      formData.append("imagem", imagem);

      await cadastrarProduto(formData);

      mensagem.textContent = "Produto cadastrado com sucesso!";
      mensagem.style.color = "green";

      form.reset();

    } catch (erro) {
      mensagem.textContent = erro.message;
      mensagem.style.color = "red";
    }
  });
});