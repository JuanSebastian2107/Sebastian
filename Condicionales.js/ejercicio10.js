var edad = Number(prompt('Ingrese su edad'));
var sexo = prompt('Ingrese su sexo (¿hombre o mujer?)');

if ((sexo == 'hombre' && edad >= 60) || (sexo == 'mujer' && edad >= 54)) {
    alert("Usted puede jubilarse");
} else {
    alert("Aún no cumple con la edad para jubilarse.");
} 
