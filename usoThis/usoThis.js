const miObjeto={
    foo: function(){
        return "Hola";
    },

    evento: function(){
        document.addEventListener('click', event =>this.foo()); //el this sirve para hacer referencia al objeto y poder acceder a sus atributos
    }
}