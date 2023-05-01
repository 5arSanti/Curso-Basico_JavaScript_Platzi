let min = 1;
let max = 3;
var pc = Math.floor(Math.random() * (max - min + 1)) + min;

switch(pc){
    case 1: var eleccion = "Piedra";break;
    case 2: var eleccion = "Papel";break;
    case 3: var eleccion = "Tijeras";break;
}

console.log("La maquina eligió: "+ pc + ". "+ eleccion);

var menu = 0;
function jugar(menu){
    switch(menu){
        case 1: //Piedra
            switch(pc){
                case 1: return("Empate");break;
                case 2: return("Perdió");break;
                case 3: return("Ganó");break;
            }
        ;break;
        case 2: //Papel
            switch(pc){
                case 1: return("Ganó");break;
                case 2: return("Empate");break;
                case 3: return("Perdió");break;
            }
        ;break;
        case 3: //Tijera
            switch(pc){
                case 1: return("Perdió");break;
                case 2: return("Ganó");break;
                case 3: return("Empate");break;
            }
        ;break;
        default: return("Elija un numero valido");
    }
}
//1. Piedra
//2. Papel
//3. Tijeras
jugar(1);