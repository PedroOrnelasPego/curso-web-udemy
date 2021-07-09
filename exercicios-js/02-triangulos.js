function triangulos(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3) {
        return 'Triâgunlo Equilatero.'
    }else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return "Triângulo Isóceles."
    }else {
        return "Triângulo Escaleno."
    }
}

console.log(triangulos(10,10,10))
console.log(triangulos(10,1,10))
console.log(triangulos(10,6,1))
