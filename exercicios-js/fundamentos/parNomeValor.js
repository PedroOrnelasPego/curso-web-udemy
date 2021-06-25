//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'falaa' //contexto léxico 2
    return saudacao
}

//Obejtos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    peso: 90,
    endereco: {
        logradouro:'Rua Muito Longe',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
