class Nomina{
    
    //contructor del objeto nomina
    constructor(nombre){
        this.nombre=nombre;
        this.empleados=[];
    }

    //getter del nombre
    getNombre(){
        return this.nombre;
    }

    
    //metodo para agregar un empleado en la nomina
    agregaaNomina(empleado,sueldo){
        this.empleados[empleado]=sueldo;
    }

    //metodo para consultar el sueldo de un empleado
    consultaSueldo(empleado){
        return this.empleados[empleado];
    }
}

//creamos un objeto nomina

let empleado= new Nomina("empleado");

console.log(empleado.getNombre());

empleado.agregaaNomina("fulano",10000);
console.log(empleado.consultaSueldo("fulano"));