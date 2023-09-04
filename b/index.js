const prompt = require('prompt-sync')()

function avaliarExames(){
    let exames = [];
    // falta typecast
    exames[0] = prompt('Insira a nota do exame 1: ')
    exames[1] = prompt('Insira a nota do exame 2: ')
    exames[2] = prompt('Insira a nota do exame 3: ')
    exames[3] = prompt('Insira a nota do exame 4: ')
    exames[4] = prompt('Insira a nota do exame 5: ')

    let total = exames.reduce(function(a,b){
        return a+b
    })


        console.log(total)
    
}

avaliarExames()