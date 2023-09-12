const prompt = require('prompt-sync')()

class Pessoa{
    constructor(idade, cidade, opiniao){
        this.idade = idade,
        this.cidade = cidade,
        this.opiniao = opiniao
    }
}

let cidades = {}

function criarPessoa(){
    console.log('------------------')

    let idade = parseInt(prompt("Insira sua idade: "))
    let cidade = prompt("Insira sua cidade: ")
    let opiniao = parseInt(prompt("Insira sua avaliacao -> 3=otimo | 2=bom | 1=regular: "))

    if(cidades[cidade]){
        cidades[cidade]++
    }else{
        cidades[cidade] = 1;
    }

    return new Pessoa(idade, cidade, opiniao)
}

let pessoas = [];

for(let i = 0; i < 3; i++){
    pessoas[i] = criarPessoa()
}

function calcularMedia(){
    let total = 0;

    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].opiniao == 3){
            total = total + pessoas[i].idade
        }
    }

    return (total / pessoas.length)
}

function quantidadeDeRegular(){
    let total = 0;

    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].opiniao == 1){
            total = total + 1
        }
    }

    return total;
}

function porcentagemDeBom(){
    let total = 0;

    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].opiniao == 2){
            total = total + 1
        } 
    }

    return ((total / pessoas.length) * 100)
}

function porcentagemPorCidade(){
    for(cidade in cidades){
        console.log(cidade + ': ' + ((cidades[cidade] / pessoas.length) * 100) + "%")
    }
}

console.log('\\\\==================//')

console.log('Media das idades que respondeu "Otimo" = ' + calcularMedia())
console.log('Quantidade que respondeu "Regular" = ' + quantidadeDeRegular())
console.log('Porcentagem que respondeu "Bom" = ' + porcentagemDeBom() + '%')
/* console.log('Quantidade por cada cidade: ')
console.table(cidades) */
console.log('Porcentagem por cada cidade: ')
porcentagemPorCidade()