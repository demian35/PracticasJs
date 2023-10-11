//creamos un arreglo que guardara objetos
const plantilla=[
    {
        id:1,
        nombre:"Julio Gonzalez",
        posision:"portero",
        valoracion:75,
        club:"UNAM",
        posicionesAlternas:["Ninguna"]
    },{
        id:2,
        nombre:"Cesar Huerta",
        posision:"Extremo Izquierdo",
        valoracion:72,
        club:"UNAM",
        posicionesAlternas:["Extremo derecho","Media Punta"]
    },{
        nombre:"Santiago Gimenez ",
        posision:"Delantero",
        valoracion:77,
        club:"Feyenoord",
        posicionesAlternas:["Media Punta"]
    }
]

//find nos regresa el objeto con el atributo unam
console.log(plantilla.find(jugador=> jugador.club=="UNAM"))

//some nos dice si hay algun objeto con un atributo en especifico
console.log(plantilla.some(jugador=>jugador.club=="Guadalajara"));

//every comprueba que todos los elementos del arreglo cumplan con una propiedad en especifico
console.log(plantilla.every(jugador=>jugador.club=="Feyenoord"));

//map nos indica si hay elementos que tengan atributos en comun
console.log(plantilla.map(jugador=>jugador.posicionesAlternas.includes("Media Punta")));
//nos muestra esos elementos coincidentes
console.log(plantilla.filter(jugador=>jugador.posicionesAlternas.includes("Media Punta")));

//reduce nos reduce todo en un solo arrego como por ejemplo los arrays de las posiciones alternas
console.log(plantilla.reduce((allPositions,jugador)=>{
    return [...allPositions, ...jugador.posicionesAlternas]
},[]));


//set nos crea un array en base a otro arreglo
console.log(plantilla.reduce((allPositions,jugador)=>{
    return Array.from(new Set([...allPositions, ...jugador.posicionesAlternas]))
},[]));

