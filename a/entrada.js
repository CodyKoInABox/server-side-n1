const prompt = require('prompt-sync')()

class Pessoa{
    constructor(idade, cidade, opiniao){
        this.idade = idade,
        this.cidade = cidade,
        this.opiniao = opiniao
    }
}

function criarPessoa(){
    let idade = parseInt(prompt("Insira sua idade: "))
    let cidade = prompt("Insira sua cidade: ")
    let opiniao = parseInt(prompt("Insira sua avaliacao -> 3=otimo | 2=bom | 1=regular: "))

    return new Pessoa(idade, cidade, opiniao)
}

export function criarPessoa()