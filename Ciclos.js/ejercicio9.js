let numeroInicial = Number(prompt("Ingrese el numero inicial"));
let numeroFinal = Number(prompt("Ingrese el numero final"));
console.log(`Numeros pares del ${numeroInicial} al ${numeroFinal}`);
for (let i = numeroInicial; i <= numeroFinal; i++) {
    if(i % 2 == 0) console.log( i );
}