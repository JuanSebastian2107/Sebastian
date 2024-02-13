var numero = Number(prompt('ingresa un numero'));

if (numero > 0) {
  alert('el numero ingresado es positivo');
}else if (numero < 0) {
    alert('el numero ingresado es negativo');
}else if (numero == 0) {
    alert('el numero ingresado es igual a cero');
} else{
    alert('tienes que ingresar un numero');
}