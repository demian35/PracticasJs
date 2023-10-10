
//funcion que suma los primeros n numeros del que reciba con un while
function sumaNumeros(num){
    //inicializamos el contador;
    let i=1;
    let suma=0;//guardaremos cada ejecucion de suma de i en esta variable
    while(i<=num){
        suma +=i;
        i++
    }
    return suma
}

console.log(sumaNumeros(10));


//funcion que suma los primeros n numeros usando un do while

function sumaNumeros2(num){
    //inicializamos contador
    let i=1;
    suma=0;//iniciazamos la variable donde sumaremos las ejecuciones
    do{
        suma+=i;
        i++
    }while(i<=num);
    return suma;
}

console.log(sumaNumeros2(10));
