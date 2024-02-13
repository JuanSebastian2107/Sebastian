var numero1 = parseFloat(prompt('ingrese el primer numero'));
var numero2 = parseFloat(prompt('ingrese el segundo numero'));

if (numero1>numero2) {
    alert('el ' + numero1 + ' es mayor que el ' +numero2);

} else if (numero2>numero1){
    alert('el ' + numero1 + ' es menor que el ' +numero2);

} else if (numero1==numero2){
    alert('ambos numeros son iguales');
} else {
    alert('tienes que ingresar un')
}