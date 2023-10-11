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

