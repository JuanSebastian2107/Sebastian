function enteroABinario(numero) {
 return numero.toString(2);
}
let numeroEntero = Number(prompt('ingresa un numero'));
let binario = enteroABinario(numeroEntero);
alert(`el valor ${numeroEntero} equivale a ${binario}`);

