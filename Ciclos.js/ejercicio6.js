let numero = Number(prompt("Ingrese un numero entero"));
let serie = [];
let a = 0, b = 1, c = 0;
let contador = 0;
while (contador < numero) {
serie.push(a);
c = b;
b = a + b;
a = c;
contador++;
}
console.log(`la serie generada es ${serie}`);