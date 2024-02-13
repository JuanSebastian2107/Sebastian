var horasTrabajadas = parseFloat(prompt("Ingresa las horas trabajadas:"));
var valorPorHora = parseFloat(prompt("Ingresa el valor por hora:"));

var salario = horasTrabajadas * valorPorHora;

alert("El salario de la persona es: " + salario);