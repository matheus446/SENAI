/*class pessoa {
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}`)
    }
}

const pessoa1 = new pessoa("Celso", 24)
pessoa1.apresentar()*/




/* EXERCICIO 2 CLASSE SIMPLES (produto)

crie um método mostrarPreco() que exiba o nome do produto e seu preço
*/





// class Produto{
//     constructor (nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }

//     mostrarPreco(){
//         console.log(`Produto: ${this.nome}, preco: R$${this.preco.toFixed}`)
//     }
// }

// const produto1 = new produto("chapeu", 25)
// produto1.mostrarPreco()
// */






// EXERCICIO 3 HERANÇA (funcionario)

// crie uma pasta gerente que herda de funcionario e possui: setor 
// crie um metoro qu exiba o nome e o setor do gerente






/*
class Fucionario{
    constructor(nome){
        this.nome = nome
    }
}

class Gerente extends Funcionario{
    constructor(nome, setor){
        super(nome)
        this.setor = setor
    }
}
    mostrarDados(){
        console.log(`Nome: ${this.nome} Setor: ${this.setor}´)
    }

}

const gerente1 = new Gerente ("Kleber", "DP")

gerente1.mostrarDados()
*/





// EXERCICIO 4 HERANÇA

// crie uma classe veiculo com: marca 
// crie uma classe carro que herda d eveiculo e possui: modelo
// crie um método que exiba a marca e o modelo do carro




/*
 class Veiculo{
    constructor(nome){
        this.nome = nome
    }
    }


 class Carro extends Veiculo{
     constructor(nome, modelo){
         super(nome)
         this.modelo = modelo
     }
 }

     mostrarDados(){
         console.log(`Nome: ${this.nome} Modelo: ${this.modelo}`)
     }
    */

// const carro1 = new Carro ("impala", "impala kkkkk")

// carro1.mostrarDados()



/*
=================================
EXERCICIO 5 ENCAPSULAMENTO

Classe onde:
o saldo seja um atributo privado
exista um metodo depositar (valor)
exista um metodo mostrarSaldo()
==================================
*/
/*
class Conta{
    #saldo
    constructor(){
        this.#saldo = 0
    }

    depositar(valor){
        if (valor < 0){
            console.log("valor inválido")
        }else{
            this.#saldo = valor
        }
    }
    mostrarSaldo(){
        console.log(`saldo: R$${this.#saldo.toFixed(2)}`)
    }
}

const conta1 = new Conta

conta1.depositar(-10)

conta1.depositar(10)

conta1.mostrarSaldo()
*/



/*
=============================
EXERCICIO 6 ENCAPSULAMENTO

crie uma classe aluno onde
a nota seja um atributo privado
exista um metodo definirNota(nota)
exista um metodo mostrarNota()
=============================
*/



class Aluno{
    #nota

    definirNota(nota){
        if(nota < 0 || nota > 10){
            console.log("nota inválida")
            this.#nota = -1
        }else{
            this.#nota = nota
        }
    }
    mostrarNota(){
        if(this.#nota = -1){
            console.log("nota ão definida")
        }else{
            console.log(`Nota: ${this.#nota}`)
        }
    }
}
const aluno1 = new Aluno()

aluno1.definirNota(10)
aluno1.mostrarNota(10)


