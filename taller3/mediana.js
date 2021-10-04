function calcMediaAritmetica(lista) {

    const sumList = lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    )
    
    const promedioList = sumList / lista.length;
    return promedioList;

}

function espar(numero) {
    if(numero % 2 === 0){
        return true;
    }else {
        return false;
    }
}

function comparacion(a, b){
    return a - b;
}

const lista1 = [
100,
200,
20000000,
20000000,
300,
400
];

function calcularMediana(lista) {

    const mitadList = parseInt(lista.length /2);
    let mediana;

    if(espar(lista.length)) {

        lista.sort(comparacion) ;

        const elemento1 = lista[mitadList - 1];
        const elemento2 = lista[mitadList];
        
        const promedio =  calcMediaAritmetica([elemento1, elemento2]);
    
        return mediana = promedio;
    
    
    }else {
        return mediana = lista1[mitadList];
    }

}
// teniendo en cuenta que estamos leyendo de forma
//  resta =  a  -  b  ;
let resta = 800 - 100 ;
console.log(resta);