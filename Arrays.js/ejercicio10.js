<<<<<<< HEAD
let matriz = [];
for(let i=0; i<5; i++) {
matriz[i] = [];
for(let j=0; j<5; j++) {
matriz[i][j] = Math.floor(Math.random() * 10);
}
}
    console.log("Matriz:");
    console.table(matriz);

for(let i=0; i<5; i++) {
let sumaFila = matriz[i].reduce((a, b) => a + b, 0);
    console.log(`Suma de la fila ${i+1}: ${sumaFila}`);
}

for(let j=0; j<5; j++) {
let sumaColumna = 0;
for(let i=0; i<5; i++) {
sumaColumna += matriz[i][j];
}
    console.log(`Suma de la columna ${j+1}: ${sumaColumna}`);
=======
let matriz = [];
for(let i=0; i<5; i++) {
matriz[i] = [];
for(let j=0; j<5; j++) {
matriz[i][j] = Math.floor(Math.random() * 10);
}
}
    console.log("Matriz:");
    console.table(matriz);

for(let i=0; i<5; i++) {
let sumaFila = matriz[i].reduce((a, b) => a + b, 0);
    console.log(`Suma de la fila ${i+1}: ${sumaFila}`);
}

for(let j=0; j<5; j++) {
let sumaColumna = 0;
for(let i=0; i<5; i++) {
sumaColumna += matriz[i][j];
}
    console.log(`Suma de la columna ${j+1}: ${sumaColumna}`);
>>>>>>> fc5dc4b818b494f7dbfefb8537feb35d44808385
}