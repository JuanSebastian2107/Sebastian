let corriente = Number(prompt('ingrese su gasto de corriente'));

if (corriente < 1000){
    alert('su tarifa por gasto de corriente electrica es 1.2');
}else if (corriente >=1000 && corriente<=1850){
    alert('su tarifa por gasto de corriente electrica es 1.0');
}else if (corriente > 1850){
    alert('su tarifa por gasto de corriente electrica es 0.9')
}else{
    alert('tienes que ingresar un numero')
}

