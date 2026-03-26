//Selecionando elementos
const contadorEl = document.querySelector("#contador");
const btnCurtir = document.querySelector("#btn-curtir");
const campoTexto = document.querySelector("#campo-texto");
const previewTexto = document.querySelector("#preview-texto");
const caixaCor = document.querySelector("#caixa-cor");

//Clique - Curtidas
let contador = 0;

btnCurtir.addEventListener("click", () => {
  contador++;
  contadorEl.textContent = contador;
});

//Input - Preview em tempo real
campoTexto.addEventListener("input", () => {
  previewTexto.textContent = "Digitando: " + campoTexto.value;
});

//Mouse - mudar cor
caixaCor.addEventListener("mouseenter", () => {
  caixaCor.style.backgroundColor = "#ae00ff"; // azul
});

caixaCor.addEventListener("mouseleave", () => {
  caixaCor.style.backgroundColor = "#59007c"; // cor original
});

//Reset (tecla "r")
document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    contador = 0;
    contadorEl.textContent = contador;

    campoTexto.value = "";
    previewTexto.textContent = "Digitando: ...";
  }
});