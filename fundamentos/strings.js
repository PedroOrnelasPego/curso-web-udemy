const escola = "Cod3r"

console.log(escola.charAt(4)) //4º caracter.
console.log(escola.charAt(5)) // não retornar nada.
console.log(escola.charCodeAt(3)) //51 na tabela Unicode.
console.log(escola.indexOf('3')) 

console.log(escola.substring(1)) //od3r.
console.log(escola.substring(0, 3)) //3 caracteres ate o indice 3.

console.log('Escola '.concat(escola).concat("!")) //Escola Cod3r!
console.log('Escola '+ (escola) + ("!")) //Escola Cod3r!

console.log(escola.replace(3, 'e')) //substituir o 3 pelo 'e'.

console.log('Ana,Maria,Pedro' .split(',')) //[ 'Ana,Maria,Pedro' ]

