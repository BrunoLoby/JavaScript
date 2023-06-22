
const imput = require("readline-sync")

const nota1 = Number(imput.question('Informe a nota 1:10 '))
const nota2 = Number(imput.question('Informe a nota 2: '))
const nota3 = Number(imput.question('Informe a nota 3: '))



let acumulador = 0;

acumulador = acumulador + 10

acumulador += 2

acumulador++

console.log(acumulador)


// Estrutura for

for (let i = 0; i < 0; i++) { console.log('Repetição', i) }

// Resolvendo Problema

let nota;

for (let i = 1; i <= 3; i++)

{ nota= Number(imput.question(`Informe a nota do ${i} do Aluno`)) 
soma=soma+nota

}

console.log(`A média do aluno é ${soma/3}.`)
