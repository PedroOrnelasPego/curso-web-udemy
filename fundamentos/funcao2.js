//Armazenando uma função em uma variavel.
const imprimirSoma = function(a ,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando um função arrow em uma variavel.
const soma = (a, b) => { //Arrow Function
    return a + b
}

console.log(soma(2,3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))
console.log(typeof subtracao)

const imprimir2 = a => console.log(a)
imprimir2('Legal!')
