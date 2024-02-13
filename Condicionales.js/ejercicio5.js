var calificacion = parseFloat(prompt("Ingrese la calificación (de 0 a 10):"));

if (calificacion >= 0 && calificacion<= 4.9) {
   alert("la calificacion ingresada es Insuficiente");
} else if (calificacion >= 5 && calificacion<= 6.9) {
    alert("la calificacion ingresada es Suficiente");
} else if (calificacion >= 7 && calificacion<= 8.9) {
    alert("la calificacion ingresada es buena");
} else if (calificacion >= 9 && calificacion<= 10) {
    alert("la calificacion ingresada es Excelente");
} else {
    alert("La calificación ingresada no está en el rango válido (de 0 a 10).");
}
