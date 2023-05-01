function carro(marca, modelo, age) {
    this.marca = marca;
    this.modelo = modelo;
    this.age = age;
}

var lista = [];

for(var i = 0; i < 30; i++){
    var marca = prompt("Marca: ");
    var modelo = prompt("Modelo: ");
    var age = prompt("Año: ");

    lista[i] = new carro(marca, modelo, age);
}
for(var i = 0; i < lista.length; i++){
    console.log(lista[i])
}
