// > Laços Condicionais

const imput = require("readline-sync")

const numero_sorteado = 5;

let numero = imput.question('Qual número voce escolhe?')




while (numero!==numero_sorteado) {console.log('Você Errou o numero. Tente novamente')
numero = imput.question('Qual número voce escolhe?')
}

console.log("Você acertou")

