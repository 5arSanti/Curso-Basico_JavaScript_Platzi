var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    age: 2020,
};

//Para llamar

miAuto.age
miAuto.marca
miAuto.modelo
//-------------------------

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    age: 2020,
    detalleDelAuto: function(){
        console.log("Auto: "+ this.modelo + " " + this.age);
    }
};
//Llamar
miAuto.detalleDelAuto();
//this hace referencia a miAuto (Se puede usar en cambio de miAuto, supongo que es solo para el objeto. por ejemplo objeto casa, 
//en vez de usar casa.puerta, se puede usar this.puerta)
//this. hace referencia al objeto global
