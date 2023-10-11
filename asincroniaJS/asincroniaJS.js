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





//funcion usando promesas y asincronia de 1500 ms para obtener los datos del objeto

const getDatos=() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(plantilla);//regresamos los datos de plantilla   
        }, 1500)//le damos 1500 ms de tiempo de respuesta
    });
}


//ejecutamos la funcion
//getDatos().then((plantilla)=> console.log(plantilla));

//se declara esta funcion para ejecutar get datos de forma asincrona
async function recaudaDatos(){
    try{
        const datosRecaudados= await getDatos();//para regresar los datos recaudados hay que esperar la respuesta de getDatos
        console.log(datosRecaudados);
    }catch(err){
        console.log(err)
    }
  
}

console.log(recaudaDatos());
