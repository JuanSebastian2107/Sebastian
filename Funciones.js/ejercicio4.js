let numero = Number(prompt("Ingrese un número del 1 al 10:"));

if (numero >= 1 && numero <= 10) {
let numeroEnPalabras = convertirNumeroEnPalabras(numero);
  alert(`El número ${numero} en palabras es ${numeroEnPalabras}`);
} else {
  alert("dato invalido, ingrese un número del 1 al 10.");
}
function convertirNumeroEnPalabras(numero) {
switch (numero) {
case 1:
return "uno";
case 2:
return "dos";
case 3:
return "tres";
case 4:
return "cuatro";
case 5:
return "cinco";
case 6:
return "seis";
case 7:
return "siete";
case 8:
return "ocho";
case 9:
return "nueve";
case 10:
return "diez";
}
}

