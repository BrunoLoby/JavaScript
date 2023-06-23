// Arrays - Partes II 

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice 

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

console.clear()

// Adcionando elementos: push | unshift

console.log('Antes de adcionar', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de Adcionar', arr2)

console.log('Antes de Adcionar com unshift', arr2)

arr2.unshift(5)
console.log('Depois de Adcionar com unshift', arr2)

console.clear()

// Removendo elementos: pop | shift

console.log('Antes de remover com o pop', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop', arr2)
console.log('O elemento removido foi', elementoRemovido)

console.clear()

// Pop: Remove o ultimo, já shift: remove  o primeiro 

// Concatenando array: concat 

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// Buscando elementos indexof | lastIndexof

console.log(arr1)

let indiceDoElementos34 = arr1.indexOf(34)

console.log(indiceDoElementos34)

// last indexOf é para saber o ultimo elemento quando eles
//  se repetem por exemplo 34,34


