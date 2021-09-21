//codigo del cuadrado
console.group("Cuadrados");


function  perimetroCuadrado (lado) {

    return lado * 4;

} 

perimetroCuadrado();


function areaCuadrado (lado) {

    return lado * lado;

} 

areaCuadrado();



console.groupEnd();

//codigo del triangulo
console.group("Triangulos");


function perimetroTriangulo (lado1, lado2, base) {

    return lado1 + lado2 + base;

}  

perimetroTriangulo();

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

alturaTrianguloIsosceles();

function areaTriangulo (base, altura) {

    
    return (base * altura)/2;

}  

areaTriangulo();



console.groupEnd();

//codigo del circulo
console.group("Circulos");

function  diametroCirculo (radio) {

    return radio * 2;

}

diametroCirculo ();

const PI = Math.PI;


function perimetroCirculo (radio) {

    const diametro = diametroCirculo (radio * 2);

    return diametro * PI;

} 

perimetroCirculo ();

function areaCirculo (radio) {

    return (radio * radio) * PI;

}

areaCirculo();

console.groupEnd();

//Aqui interactuamos con el HTML.

//FUNCIONES DE CUADRADOS

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);

}

//FUNCIONES DE CIRCULOS

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

//FUNCIONES DE TRIANGULOS 


    function calcularPerimetroTriangulo(){
        const inputLado1 = document.getElementById("inputLado1");
        const inputLado2 = document.getElementById("inputLado2");
        const inputBase = document.getElementById("inputBase");
        const valueLado1 = inputLado1.value;
        const valueLado2 = inputLado2.value;
        const valueBase = inputBase.value;

        if (valueLado1 === valueLado2 && valueLado1 != valueBase){

            const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
            alert(perimetro);

        } else {
            alert("No es un triangulo isoceles");
        }

        

    }

    function calcularAreaTriangulo(){
        const inputLado1 = document.getElementById("inputLado1");
        const inputLado2 = document.getElementById("inputLado2");
        const inputBase = document.getElementById("inputBase");
        const valueLado1 = inputLado1.value;
        const valueLado2 = inputLado2.value;
        const valueBase = inputBase.value;
        
        if (valueLado1 != valueLado2 && valueLado1 === valueBase){
            alert("No es un triangulo isoceles");

        } else {
            
            const  altura =  alturaTrianguloIsosceles(valueLado1,valueLado2, valueBase);
            const area = areaTriangulo(valueBase, altura);
            alert(area);

        }

    }

    
