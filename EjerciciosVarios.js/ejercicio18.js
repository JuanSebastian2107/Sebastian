let marcaMoto = prompt("Ingresa la marca de la moto: ").toLowerCase();
let precioMoto = parseFloat(prompt("Ingresa el precio de la moto: "));
let descuentoMoto;
if (marcaMoto === "honda") {
    descuentoMoto = precioMoto * 0.05;
} else if (marcaMoto === "yamaha") {
    descuentoMoto = precioMoto * 0.08;
} else if (marcaMoto === "suzuki") {
    descuentoMoto = precioMoto * 0.10;
} else {
    descuentoMoto = precioMoto * 0.02;
}
let precioFinal = precioMoto - descuentoMoto;
alert('el precio final es ' + precioFinal);