function multiplicarPorDos(array) {
let resultado = [];
  
for (let i = 0; i < array.length; i++) {
resultado.push(array[i] * 2);
}
return resultado;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let resultado = multiplicarPorDos(numeros);
console.log(resultado); 