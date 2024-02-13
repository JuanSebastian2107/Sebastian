 var precioOriginal = parseFloat (prompt('precio del producto'));
 var porcentajeDescuento = parseFloat (prompt('porcentaje de descuento del producto'));
 
 var descuento = precioOriginal * (porcentajeDescuento/100);
 
 var precioConDescuento = precioOriginal - descuento;
 alert('el precio con descuento es ' +precioConDescuento)