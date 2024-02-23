let fecha = prompt("ingrese su fecha de nacimiento en formato dd/mm/aaaa");

let partesFechas = fecha.split("/"); 

let dia = parseInt(partesFechas[0]);
let mes = parseInt(partesFechas[1]);
let año = parseInt (partesFechas[2]);

console.log("dia",dia); 
console.log("mes",mes);
console.log("año",año); 