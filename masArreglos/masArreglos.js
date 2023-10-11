//creamos un arreglo que guardara objetos
const plantilla=[
    {
        id:1,
        nombre:"Julio Gonzalez",
        posision:"portero",
        valoracion:75,
        club:"UNAM"
    },{
        id:2,
        nombre:"Cesar Huerta",
        posision:"Extremo Izquierdo",
        valoracion:72,
        club:"UNAM"
    },{
        nombre:"Santiago Gimenez ",
        posision:"Delantero",
        valoracion:77,
        club:"Feyenoord"
    }
]

console.log(plantilla.find(jugador=> jugador.club=="UNAM"))