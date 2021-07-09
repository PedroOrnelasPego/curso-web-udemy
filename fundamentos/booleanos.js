let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeitos...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null) //nulo
console.log(!!NaN) // not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('finalizando')
console.log(!!('' || null || 0 || ' '))

let nome = 'Pedro'
console.log(nome || 'Desconhecido')