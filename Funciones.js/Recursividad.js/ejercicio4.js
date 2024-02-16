function invertirNumero(numero) {
if (numero < 10) {
return numero.toString();
} else {
let ultimoDigito = numero % 10;
let demasNumeros = Math.trunc(numero / 10);
return ultimoDigito.toString() + invertirNumero(demasNumeros);
}
}console.log(invertirNumero(2302));