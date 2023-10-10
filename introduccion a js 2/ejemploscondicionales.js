var suma=5+5

if(suma >11 ){
    document.write("LA suma es mayor que 11");
}else if(suma<11 && suma >7){
    document.write("El resultado esta entre 7 y 11");
}else{
    document.write("el resultado es menor a 7");
}

//uso de estructura switch

switch(suma){
    case suma > 10:
        console.log("El resultado es mayor a 10")
        break;
    case suma=10 || suma > 5:
        console.log("El resultado esta entre 10 y 5")
        break;
    default:
        console.log("el resultado es menor a 5")

}