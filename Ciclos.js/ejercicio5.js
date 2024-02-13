let n = Number(prompt('ingrese un numero entero'));
let serie = 0;
for (let y = 1; y <= n; y++) {
    console.log(serie + " + " + "1/" + y + " = " + (serie += (1/y)));           
}