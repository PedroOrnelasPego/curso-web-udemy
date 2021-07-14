const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) //Obs: o indice começa pelo 0, logo o +1 inicializa pelo o 1.
}

fabricantes.forEach(imprimir) //for it = para cada
fabricantes.forEach(fabricante => console.log(fabricante))