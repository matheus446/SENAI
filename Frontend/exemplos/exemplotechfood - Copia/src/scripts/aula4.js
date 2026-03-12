class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
        }
        exibirComoMoeda(total){
            return "R$" + total.toFixed(2)
    }

}

const lasanha = new Prato("lasanha bolonhesa", 45.00)



alert("seja bem vindo ao restaurante sabor e saber")

console.log("teste")

const cliente = prompt("bem vindo, cliente. Para um atendimento personalizado digite seu nome")

let nomeFormatado = cliente.trim().toUpperCase()

alert("bem vindo: " + nomeFormatado)
alert(`bem vindo ${nomeFormatado}`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 12){
    alert(`Bom dia, ${nomeFormatado}, aproveite as delicias do café da manhã!`)
    console.log("antes das 11")
}else{
    alert(`Boa tarde, ${nomeFormatado}, aproveite as iguarias do almoço!`)
    console.log("depois das 11")
}

const querPrato = confirm(`fala meu querido ${nomeFormatado} quer um prato?`)

if(querPrato){
    let quantidade = prompt("hoje, temos lasanha a bolonhesa, quantas voce quer?")
    let total = lasanha.preco * quantidade
    alert(`bacana, o seu total de ${lasanha.nome} é de: ${lasanha.exibirComoMoeda(total)} `)
}else{
    alert("ok, obrigado pela visita, volte sempre")
}


