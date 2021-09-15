//codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log(`La medida de los lados de el cuadrado son ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro de el cuadrado es de ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area de el cuadrado es de ${areaCuadrado}cm²`);

console.groupEnd();

//codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
`los lados del triangulo son ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm`
);

const alturaTriangulo = 5.5;
console.log(`La altura de le triagulo es de ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro de el triangulo es de ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`El área del triangulo es de ${areaTriangulo}cm²`)


console.groupEnd();

//codigo del circulo
console.group("Circulos");

const radioCirculo = 4;
console.log(`El radio del circulo es de ${radioCirculo}cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es de ${diametroCirculo}cm`);

const PI = Math.PI;
console.log(`PI tiene valor de ${PI}`);

const perimetroCirculo = diametroCirculo * PI; 
console.log(`El perimetro del circulo es de ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area del circulo es de ${areaCirculo}cm²`);




console.groupEnd();