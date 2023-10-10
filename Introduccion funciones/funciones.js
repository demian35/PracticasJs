//ejemplo de funcion nombre tiene como valor por defecto "pepe"

function saluda(nombre ="Pepe "){
    return `Hola ${nombre}`;
}

//funcion para sumar
function suma(numero1,numero2){
    return numero1+numero2;
}

//funcion para restar
function resta(numero1,numero2){
    return numero1-numero2;
}

console.log(saluda("gaelo"));

console.log(suma(6,9));

console.log(resta(15,8));