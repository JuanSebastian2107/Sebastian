class Cuenta {
constructor(titular, cantidad = 0) {
    this.titular = titular
    this.cantidad = cantidad
}
get titular() {
    return this._titular
}
set titular(nuevoTitular) {
this._titular = nuevoTitular
}
get cantidad() {
    return this._cantidad
}
set cantidad(nuevaCantidad) {
this._cantidad = nuevaCantidad
}
toString() {
    return `Titular: ${this.titular}, Cantidad: ${this.cantidad}`
}
ingresar(cantidad) {
 if (cantidad > 0) this.cantidad += cantidad
}
 retirar(cantidad) {
if (this.cantidad - cantidad < 0) this.cantidad = 0
else this.cantidad -= cantidad
}
}
let miCuenta = new Cuenta("Sebastian", 20000);
console.log(miCuenta.toString());

miCuenta.ingresar(2000);
console.log(miCuenta.toString());

miCuenta.retirar(12000);
console.log(miCuenta.toString());

miCuenta.retirar(35000);
console.log(miCuenta.toString());
