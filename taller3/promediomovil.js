const arrayObject = [
    {product : "short",
    mes : 1,
    ventas : 15},

    {product : "short",
    mes : 2,
    ventas : 25},

    {product : "short",
    mes : 3,
    ventas : 25},
    
    {product : "short",
    mes : 4,
    ventas : 14}
]

function promedioMovil (array) {

    const mapVentas = array.map((ventas)=>{
        return ventas.ventas;
    })
    
    const sumaVentas = mapVentas.reduce((acumulado,newValor)=>{
        return acumulado + newValor;
    },0)

    const promedioMovil = sumaVentas / (array.length);

    return promedioMovil;

}

promedioMovil(arrayObject);

