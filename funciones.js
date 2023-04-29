//Funciones Declarativas

function miFuncion(){
    return 3;
}

miFuncion();


//Funciones de Expresión (También conocidas como funciones anónimas)

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


//Scope global y local
var miNombre = "Santiago";

function nombre() {
    var miApellido = "Arias";
    console.log(miNombre + " " + miApellido);
}
nombre();