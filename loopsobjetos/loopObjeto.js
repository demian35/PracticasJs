
//creacion de un objeto
const jugador={
    nombre:"Demian",
    edad:25,
    posicion:StylePropertyMapReadOnly
};

const propiedades=Object.getOwnPropertyNames(jugador);//obtenemos las propiedades del objeto
propiedades.forEach(name =>{
    let valor=Object.getOwnPropertyDescriptor(jugador,name).value;//nos regresa la informacion de un objeto
    console.log(`La propiedad ${name} Tiene: ${valor}`)
})
