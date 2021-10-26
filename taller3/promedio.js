const lista = []





function calcMediaAritmetica() {

    
    const numero1 = document.getElementById('#1');
    const value1 = lista.push(numero1.value);
    const numero2 = document.getElementById('#2');
    const value2 = lista.push(numero2.value);
    const numero3 = document.getElementById('#3');
    const value3 = lista.push(numero3.value);


    // let sumList = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumList = sumList + lista[i];
    // }

    const sumList = lista.reduce((acc ,el) => {acc + el},0)
    
    const promedioList = sumList / lista.length;
    console.log(promedioList);
    console.log(lista);
    console.log(sumList);
    return promedioList;


}
