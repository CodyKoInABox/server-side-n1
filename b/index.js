const prompt = require('prompt-sync')()

let total = 0

function entrada(){
    if(parseInt(prompt('Insira sua nota no exame 1: ')) > 70){
        total += 2
    }
    if(parseInt(prompt('Insira sua nota no exame 2: ')) > 70){
        total += 4
    }
    if(parseInt(prompt('Insira sua nota no exame 3: ')) > 70){
        total += 8
    }
    if(parseInt(prompt('Insira sua nota no exame 4: ')) > 70){
        total += 16
    }
    if(parseInt(prompt('Insira sua nota no exame 5: ')) > 70){
        total += 32
    }
}

entrada()
console.log(total)
switch(total){
    case 62:
        console.log('Classificacao A -> Passou em todos os exames')
    break;
    
    case 22:
        console.log('Classificacao B -> Passou em I, II e IV, mas nao em III ou V')
    break;

    case 30:
        console.log('Classificacao C -> Passou em I e II, III ou IV, mas não em V')
    break;

    default:
        console.log('Reprovado.')
    break;
}

