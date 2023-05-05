var articulos = [
    {nombre: "Bicicleta", costo: 3000 }, 
    {nombre:"Tv", costo: 2500 },
    {nombre:"Libro", costo: 320 },
    {nombre:"Celular", costo: 2500 },
    {nombre:"Laptop", costo: 20000 },
    {nombre:"Teclado", costo: 500 },
    {nombre:"Audifonos", costo: 1700 },

];
//-------------------------------------------------
//Filtrar cosas especificas - Retoma todas las coincidencias
var articulosFiltrados = articulos.filter(
    function(articulo) {
        return articulo.costo <= 500;
    }
);

//---------------------------------------------
//Mapear todo el contenido del array (En este caso los nombres de los articulos)
var nombreArticulos = articulos.map(
    function(articulo){
        return articulo.nombre;
    }
)
//--------------------------------------------


