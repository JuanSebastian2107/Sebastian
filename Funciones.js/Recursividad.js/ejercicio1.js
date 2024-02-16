function fibonacci(numero) {
if (numero < 2) {
return numero;
} else {
return fibonacci(numero - 1) + fibonacci(numero - 2);
}
}
for (var i = 0; i < 10; i++) {
console.log(fibonacci(i));
 }