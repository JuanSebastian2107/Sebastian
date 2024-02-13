var numero1 = parseFloat(prompt('ingrese el primer numero'));
var numero2 = parseFloat(prompt('ingrese el primer numero'));
var numero3 = parseFloat(prompt('ingrese el primer numero'));

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = "persona 1";
    segundoMayor = (numero2 >= numero3) ? "persona 3" : "persona 2";
    menor = "persona 2";
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = "persona 2";
    segundoMayor = (numero1 >= numero3) ? "persona 3" : "persona 1";
    menor = "persona 1";
} else {
    mayor = "persona 3";
    segundoMayor = (numero1 >= numero2) ? "persona 2" : "persona 1";
    menor = "persona 1";
}
alert("Mayor: " + mayor + ", Segundo Mayor: " + segundoMayor + ", Menor: " + menor);