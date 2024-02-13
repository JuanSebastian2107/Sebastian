function resultado() {
let resultado = 0;
let numero = Number(prompt("Ingresa el numero."));
 for (let contador = 1; contador <= 20; contador++) {
    resultado = numero * contador;
    console.log(resultado);
 }
}
console.log(resultado());