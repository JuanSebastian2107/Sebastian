var calificacion1 = parseFloat(prompt('ingrese la primera calificacion'));
var calificacion2 = parseFloat(prompt('ingrese la segunda calificacion'));
var calificacion3 = parseFloat(prompt('ingrese la tercera calificacion'));
var calificacion4 = parseFloat(prompt('ingrese la cuarta calificacion'));


var promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4

var maxima =  Math.max(calificacion1 , calificacion2 , calificacion3 , calificacion4)

var minima = Math.min(calificacion1 , calificacion2 , calificacion3 , calificacion4)


if(isNaN (calificacion1)  || isNaN (calificacion2)  || isNaN (calificacion3)  || isNaN (calificacion4)) {
    alert("no se pueden escribir letras"); 
} else {
    alert("el promedio de la nota es : " + promedio);
    alert("la calificacion maxima es: " + maxima);
    alert("la calificacion minima es: " + minima);

}