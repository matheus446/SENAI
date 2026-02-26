let nome = prompt("Digite seu nome:")

let sobrenome = prompt("Digite seu sobrenome:")

nome = nome.trim()

sobrenome = sobrenome.trim()

let nomeCompleto = nome + " " + sobrenome;

alert("Nome completo: " + nomeCompleto.toLowerCase());

alert("Seu nome possui " + nomeCompleto.length + " caracteres.");



//2
let valorConta = prompt("Digite o valor total da conta:");
valorConta = Number(valorConta.replace(",", "."));

let pessoas = Number(prompt("Quantas pessoas estão na mesa?"));

let valorPorPessoa = valorConta / pessoas;

alert("Cada amigo deve pagar R$ " + valorPorPessoa.toFixed(2));



//3
let valorCompra = Number(prompt("Digite o valor da compra:"));

let cupom = prompt('Você possui cupom? Digite "sim" ou "nao":');

if (valorCompra > 150 || cupom.toLowerCase() === "sim") {
    console.log("Frete Grátis Liberado");
} else {
    console.log("Frete Pago");
}


//4
let numeroUsuario = Number(prompt("Escolha um número de 1 a 10:"));

let numeroSorteado = Math.floor(Math.random() * 10) + 1;

if (numeroUsuario === numeroSorteado) {
    alert("Parabéns, você ganhou um brinde!");
} else {
    alert("Que pena, o número sorteado foi " + numeroSorteado);
}


//5
class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }

    idadeVeiculo(anoAtual) {
        return anoAtual - this.ano;
    }
}

let carro = new Veiculo("Corolla", "Toyota", 2020);

let anoAtual = Number(prompt("Digite o ano atual:"));

let idade = carro.idadeVeiculo(anoAtual);

alert("O veículo " + carro.modelo + " possui " + idade + " anos.");