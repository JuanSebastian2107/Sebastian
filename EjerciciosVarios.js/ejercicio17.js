let nombre = prompt("Ingrese su nombre:");
let edad = Number(prompt("Ingrese su edad:"));
let sexo = prompt("Ingrese su sexo (M para masculino, F para femenino):");

if (sexo == "M" && edad >= 18) {
  alert("Nombre de la persona: " + nombre);
} else {
  alert("La persona no es masculina o no es mayor de edad.");
}
