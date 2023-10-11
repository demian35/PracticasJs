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