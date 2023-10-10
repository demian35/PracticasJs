//creamos un objeto que contendra un arreglo

const objeto={
    miArreglo: new Array(10000)//creamos el arreglo
}

//funcion que recorre el arreglo sin optimizar
function iteraArregloIneficiente(){
    console.time("ineficiente");//funcion que inicia el conteo del tiempo que tarda algo en ejecutarse
    for(let i=0; i<objeto.miArreglo.length;i++){
        objeto.miArreglo[i]="hola";
    }
    console.timeEnd("ineficiente");//funcion que detiene el temporizador
}
console.log(iteraArregloIneficiente());

//funcion mas optima para recorrer el arreglo

function iteraOptima(){
   arreglo=objeto.miArreglo//inicializamos antes la variable arreglo
    console.time("eficiente");
    for(let i=0,longitud=arreglo.length; i<longitud ; i++ ){
        arreglo[i]="hola";
    }
    console.timeEnd("eficiente");

}

console.log(iteraOptima());