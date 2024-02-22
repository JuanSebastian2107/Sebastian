let enteros = [14, 10, 5, 22, 8, 6]
let longitud = enteros.length;
let suma = 0;
let mayor = enteros[0];
let menor = enteros[0];

for (let i = 0; i < longitud; i++) {
suma += enteros[i];
if (enteros[i] > mayor) {
mayor = enteros[i];
}if (enteros[i] < menor) {
menor = enteros[i];
}
}
let media = suma / longitud;
alert(`El número mayor es ${mayor}`);
alert(`El número menor es ${menor}`);
alert(`La media de los números es ${media}`);