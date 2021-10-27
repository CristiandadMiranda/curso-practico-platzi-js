const lista = [
    1,
    2,
    3,
    2,
    1,
    2,
    3,
    3,
    4
];

const listCount = {};

function arrayObject (lista){

    lista.map(function(elemento){
        if(listCount[elemento])
        {
            listCount[elemento] += 1;
        }else{
            listCount[elemento] = 1;
        }
    });

 //dentro de este map lo que hacemos es leer todo el array y decirle que si el elemento existe
// solamente le aumento en uno su valor pero si no que cree el objeto y su valor comience en uno.

}

function arrayCount1 (object){

    const arrayCount = Object.entries(listCount).sort(
        function(a, b){
            return a[1] - b[1];
            // dentro de las llaves escribimos la posicion dentro del array que queremos comparar.
        }
    );
    
    const moda = arrayCount[arrayCount.length - 1];
    return moda;

}


// object.entries me convierte un objeto elegido en un array.


function encontrarModa (lista){

    const object = arrayObject(lista);

    const moda = arrayCount1(object);

    console.log(moda);

}

encontrarModa(lista);
