let numero = prompt('ingresa un numero');

function esPar(numero) {
 return numero % 2 === 0;
}if (isNaN(numero)){
 alert('tienes que ingresar un numero')
}if (esPar(numero)) {
 alert(`${numero} es un número par`);
} else {
 alert(`${numero} es un número impar`);
}


