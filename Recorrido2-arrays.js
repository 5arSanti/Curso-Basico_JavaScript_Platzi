var articulos = [
    {nombre: "Bicicleta", costo: 3000 }, 
    {nombre:"Tv", costo: 2500 },
    {nombre:"Libro", costo: 320 },
    {nombre:"Celular", costo: 2500 },
    {nombre:"Laptop", costo: 20000 },
    {nombre:"Teclado", costo: 500 },
    {nombre:"Audifonos", costo: 1700 },

];

//-------------------------------------
//Genera un array con el valor q se le esta pasando
//Retoma solo la primera coincidencia
var encuentraArticulo = articulos.find(
    function(articulo){
        return articulo.nombre === "Laptop";
    }
);

//-------------------------------------------
//No genera un nuevo array (Sirve para busquedas por ejemplos de muchos articulos en una pagina - bisqueda por nombre)
articulos.forEach(
    function(articulo){
        console.log(articulo.nombre);
    }
);

//------------------------------------------
//Validacion de true or false (Regresa si en la lista hay articulos que cumplen la condicion, en este caso precio menor de 700)
var articulosBaratos = articulos.some(
    function(articulo){
        return (articulo.costo <= 700)
    }
);
