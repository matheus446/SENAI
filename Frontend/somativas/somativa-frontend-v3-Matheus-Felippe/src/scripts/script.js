const destaquePet = document.querySelector("#destaque-pet");


const saudacao =  document.querySelector("#saudacao-voluntario");
const hora = new Date ().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ?"Plantão matinal, Protetor!"
            : ""
}
if (saudacao) {
    saudacao.textContent =
        hora >= 12 || 17
            ?"Plantão da tarde, Protetor!"
            :""
}
else {
    print("plantão noturno, Protetor!")
}

destaquePet.addEventListener("mouseover", () => {
    destaquePet.style.backgroundColor = "#ff9f43";
});

destaquePet.addEventListener("mouseleave", () => {
    destaquePet.style.backgroundColor = "#ffffff";
});



const idadePet = document.querySelector("#idade-pet");
const idadeHum = document.querySelector("#idade-humana");

    idadePet.addEventListener("input", () => {
    const valor = Number(idadePet.value) * 7;
    idadeHum.textContent = `idade: ${valor.toFixed(2)}`
});



const btnCadastrar = document.querySelector("#btn-cadastrar");
const nomePet = document.querySelector("#nome-pet");
const listaAdocao = document.querySelector("#lista-adocao");

btnCadastrar.addEventListener("click",function() {
    
});

