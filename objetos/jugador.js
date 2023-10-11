const jugador={
    nombre:"Demian",
    edad:"27",
    posision:"portero",
    valoracion:75,
    club:"UNAM",
    //ejemplo de metodo
    juega:function(){
        console.log("Jugando partido");
    }
    
};


jugador.valoracion
console.log(jugador["valoracion"]);
jugador.club="america"
console.log(jugador["club"]);

console.log(jugador.juega());


//creando otro objeto

const libro={
    titulo:"Programacion1",
    autor:{//Creando una estructura dentro de otra esructura
        nombre:"Fulanito",
        edad:30,
        redes:{
            tiktok:"fulanitomx"
        }
    }
};

console.log(libro.autor.redes.tiktok);//accediendo al atributo tiktok

const coche1={marca:"tesla",modelo:"X"}
const coche2={marca:"tesla",modelo:"X"}

//comparando objetos

if(coche1===coche2){
    console.log("Son coches iguales")
}else{
    console.log("Son coches diferentes")
}


//comparando objetos por sus atributos
if(coche1.marca==coche2.marca){
    console.log("Son coches iguales");
}else{
    console.log("Son coches diferentes");
}


//usos de funciones de Math

console.log(Math.PI);//imprimimos el valor de pi
console.log(Math.random());//imprimimos un numero aleatorio entre 0 y 1
console.log(Math.min(2,4,7));//busca el numero mas chico
console.log(Math.max(2,6,8));//busca el numero mas grande

