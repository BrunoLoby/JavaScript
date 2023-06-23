// let x = 1
// let y = 47

// function verificadora(x, y)
// { if (x>y) {return"deu erro"

// } else {return "deu certo"

// }


//     return x / y }

// console.log(somar(x, y))

function findAverage(array) {
    if (array === []) {
        return 0;

    } else {
        var soma = 0;
        for (var i = 0; i < array.length; i++) {
            soma += array[i];
        }
        var media = soma / array.length;
        return media;


    }
}



console.log(findAverage([70, 20]))

console.clear()


// Função Aula

function saudação1(nome) { 
    console.log(`Olá, ${nome} seja bem vinda(o)!!`) }

saudação1("Bruno")


// Como enviar parâmetros para as fuções?

function saudação2(nome, curso)
{console.log(`Olá, ${nome} seja bem vinda(o) ao curso ${curso}`) }

saudação2("Bruno", 'Html & Css')

// Retorno da função

function soma(numero1,numero2)
{return numero1+numero2}

let resultado =soma(40,20)

console.log(resultado/2)

