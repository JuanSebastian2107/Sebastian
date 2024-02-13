let numero = Number(prompt("Ingrese un numero entero para hallar su factorial"));
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
alert(`El factorial de ${numero} es ${factorial}`);