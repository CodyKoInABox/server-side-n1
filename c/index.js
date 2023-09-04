const prompt = require('prompt-sync')()

function eAnoBissexto(ano){
    if(ano%400==0 || (ano%4==0 && ano%100!=0)){
        return true
    }else{
        return false
    }
}

function inputOutput(){
    console.log("Verificar se ano e bissexto")
    console.log("---------------------------")
    
    let ano = prompt("Insira o ano: ")

    if(eAnoBissexto(ano)){
        console.log("Bissexto")
    }else{
        console.log("Nao bissexto")
    }
}

inputOutput()

module.exports = eAnoBissexto