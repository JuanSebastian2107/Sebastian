class Cuenta {
constructor(saldo = 0) {
this.saldo = saldo;
}
ingreso(monto) {
if (monto > 0) {
this.saldo += monto;
    return true;
}}
reintegro(monto) {
if (monto > 0 && monto <= this.saldo) {
this.saldo -= monto;
    return true;
}}
transferencia(monto, otraCuenta) {
if (this.reintegro(monto)) {
otraCuenta.ingreso(monto);
    return true;
}}
get saldo() {
    return this.saldo;
}
set saldo(nuevoSaldo) {
if (nuevoSaldo >= 0) {
this.saldo = nuevoSaldo;
} 
}}