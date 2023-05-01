//Objeto


//Función constructora
function auto(marca, modelo, age){
    this.marca = marca;
    this.modelo = modelo;
    this.age = age;
}


var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

//Playground Ej 1
function solution(car) {
    car.drivingLicense = Boolean(car.licensePlate);

    return car;
}

//Ej 2
function solution(car) {
    car.drivingLicense = Boolean(car.licensePlate);
    
    return car;
}
