let miArreglo=[[2,3],[5,7]];
console.log(miArreglo[1][1])

//metodos de arrays

let miArreglo2=[2,5,7,3,8];

//sort para ordenar los elementos del arreglo
console.log(miArreglo2.sort());

//elimina el ultmo elemento del arreglo
console.log(miArreglo2.pop());

//agrega elementos al array
console.log(miArreglo2.push(9));

console.log(miArreglo2.sort());


function sumaDos(num){
    return num+2;
}

console.log(sumaDos(4));

//funcion map sirve para poder aplicar alguna funcion a los elementos de un array

let suma2= miArreglo2.map((item) => sumaDos(item))
console.log(suma2);


//funcion filter para filtrar elementos de un array que cumplan con determinada condicion

let impares=miArreglo2.filter((item)=> item%2!==0);
console.log(impares);

//operaciones clase string

console.log("JavaScript"[2])//regresa la cadena o caracter que esta en el indice 2

console.log("Javascript".length);
console.log("Javascript".indexOf("script"));//indexOF nos regresa el indice donde inicia una cadena
console.log("Javascript".substring(4,7));//substring regresa la subcadena que se encuentra en el rango de incices indicado

