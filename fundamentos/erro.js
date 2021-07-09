function tratarErroELancar(erro) {
    //throw new Error('Ligar no suporte')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)