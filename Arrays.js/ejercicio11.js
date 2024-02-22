let array = Number(prompt("Ingresa el número del tamaño del array"));
let num = Number(prompt("Ingresa el número a calcular los múltiplos"));

function multiplos(num, longitud) {
let arreglo = [];
for (let i = 1; i <= longitud; i++) {
arreglo.push(num * i);
}
return arreglo;
}
let resultado = multiplos(num , array);

function resultadoMultiplos(arreglo) {
for (let i = 0; i < arreglo.length; i++) {
console.log(arreglo[i]);
}
}
resultadoMultiplos(resultado);