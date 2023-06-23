// Aula de objetos

// Como cria um objeto no JS?

let pessoa ={
nome:'Bruno',
idade:19,
}

console.log(pessoa.nome)
console.log(pessoa.idade)


// Como adcionar um par chave-valor

pessoa.altura = 1.87

console.log(pessoa)
// Como remover um par chave-valor

delete pessoa.altura

console.log(pessoa)
// Como percorrer?
for (let chave in pessoa) {console.log(chave)}