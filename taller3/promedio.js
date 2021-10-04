const lista1 = [
    100,
    200,
    300,
    400
]


function calcMediaAritmetica(lista) {

    // let sumList = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumList = sumList + lista[i];
    // }

    const sumList = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    )
    
    const promedioList = sumList / lista.length;
    return promedioList;

}