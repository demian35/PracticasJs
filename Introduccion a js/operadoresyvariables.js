//declaracion de variables
let numero1=4;
let numero2=2;
let numero3=8

let micadena="Helloworld";

document.write(micadena);
console.log(typeof micadena);//funcion typeof para ver el tipo de dato de una variable

//uso de operadores matematicos

//suma
var suma=numero1+numero2;
console.log(suma);
console.log(typeof suma);

//resta
var resta=numero1-numero2;
console.log(resta);
console.log(typeof resta);

//multiplicacion
var mult=numero1*numero2;
console.log(mult);
console.log(typeof mult);

//division
var division=numero1/numero3;
console.log(division);
console.log(typeof division);

//concatenacion de cadenas

var cadenaNueva= micadena + " Its me";

document.write(cadenaNueva);

//incremento y decremento

let incremento=++numero3;
console.log(incremento)

let decremento=--numero3;
console.log(decremento);


//comparaciones y valores logicos

console.log(!true);
console.log(!!true);
console.log(!false);

console.log(numero1===numero3);
console.log(numero3 >= numero1);


//operadores logicos

//and &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//or ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
