//el closure se usa para cuando tengamos dos funciones incrustadas no tengamos que hacer doble llamada
//para ejecutar a dicha funcion

const cadenaA="Hola ";

//funcion sin usar closure 
function global(){
    const cadenaB="Como estas ";
    function local(){
        const cadenaC=" que paso";
        return cadenaA+cadenaB+cadenaC;
    }
    
    return local;
    
}

//ejecutando funcion con doble llamada
console.log(global()());


//ejemplo de funcion ejecutada con closure

let miContador=(function (){
    let _contador=0;//inicializamos el contador con la variable privada para que no sea accesible fuera de la funcion
    function incremento(){//funcion que incrementa el contador
        return _contador++;
    }
    function decremento(){//funcion que decrementa el contador
        return _contador--;
    }
    function valorActual(){//regresamos el valor actual del contador
        return _contador;
    }

    return{ //regresaremos la ejecucion de las tres funciones
        incremento,
        decremento,
        valorActual,

    }
})();

//ejecutamos las funciones
//ejecucion valorActual
console.log(miContador.valorActual());

//ejecucion incremento
console.log(miContador.incremento());
console.log(miContador.valorActual());
console.log(miContador.incremento());
console.log(miContador.valorActual());

//ejecucion decremento
console.log(miContador.decremento());
console.log(miContador.valorActual());