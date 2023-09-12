const prompt = require('prompt-sync')()

const carnes = {
    tipos: ['File Duplo', 'Alcatra', 'Picanha'],
    ate5KG: ['R$ 24,90', 'R$ 25,90', 'R$ 35,90'],
    acima5KG: ['R$ 25,80', 'R$ 26,80', 'R$ 37,80']
}

console.table(carnes)

let tipo = parseInt(prompt('Insira o numero do tipo de carne que voce deseja: '))
let quantidade = parseInt(prompt('Insira quantas GRAMAS voce deseja: '))
let pagamento = parseInt(prompt('Digite 1 se for pagar com Cartao Tabajara ou 0 para outro metodo: '))

console.log('------------')
console.log('NOTA FISCAL')
console.log('------------')


console.log('Tipo: ' + carnes.tipos[tipo])
console.log('Quantidade: ' + quantidade + 'g.')
console.log('Preco bruto: R$' + calcularPreco(tipo, quantidade))
console.log('Tipo de pagamento: ' + tipoPagamento(pagamento))
console.log('Desconto: ' + desconto(pagamento) + '%')
console.log('Valor final: R$' + valorFinal(calcularPreco(tipo, quantidade), desconto(pagamento)))


function calcularPreco(tipo, quantidade){
    let preco;
    if(quantidade < 5000){
        switch(tipo){
            case 0:
            preco = (quantidade / 1000) * 24,9
            break;
            case 1:
            preco = (quantidade / 1000) * 25,9
            break;
            case 2:
            preco = (quantidade / 1000) * 35,9
            break;
        }
    }else{
        switch(tipo){
            case 0:
            preco = (quantidade / 1000) * 25,8
            break;
            case 1:
            preco = (quantidade / 1000) * 26,8
            break;
            case 2:
            preco = (quantidade / 1000) * 37,8
            break;
        }
    }
    return preco;
}

function tipoPagamento(pagamento){
    if(pagamento == 1){
        return 'Cartao Tabajara'
    }else{
        return 'Outro'
    }
}

function desconto(pagamento){
    if(pagamento == 1){
        return 5
    }else{
        return 0
    }
}

function valorFinal(valorBruto, desconto){
    return valorBruto * ((100 - desconto) / 100)
}