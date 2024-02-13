var precio1 = parseFloat(prompt("Ingrese el precio de la primera película: "));
var precio2 = parseFloat(prompt("Ingrese el precio de la segunda película: "));
var precio3 = parseFloat(prompt("Ingrese el precio de la tercera película: "));

if (precio1 <= precio2 && precio1 <= precio3) {
    var precioTotal = precio1 + Math.min(precio2, precio3);
} else if (precio2 <= precio1 && precio2 <= precio3) {
    var precioTotal = precio2 + Math.min(precio1, precio3);
} else {
    var precioTotal = precio3 + Math.min(precio1, precio2);
}
alert("Cantidad a pagar por las tres películas " + precioTotal);
  




