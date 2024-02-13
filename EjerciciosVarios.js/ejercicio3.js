// Pedir al usuario que ingrese los valores de los catetos
var cateto1 = Number(prompt('Ingresa el valor del primer cateto'));
var cateto2 = Number(prompt('Ingresa el valor del segundo cateto'));

// Calcular la hipotenusa utilizando el teorema de Pitágoras
Hipotenusa = Math.sqrt(cateto1*cateto1+cateto2*cateto2);

// Mostrar el resultado
alert("La hipotenusa del triángulo rectángulo es: " + Hipotenusa);
