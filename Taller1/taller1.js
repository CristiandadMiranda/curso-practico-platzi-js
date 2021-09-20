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