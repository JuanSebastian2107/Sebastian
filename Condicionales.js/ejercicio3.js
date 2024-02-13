 var numero1 = parseFloat(prompt('ingrese el primer numero'));
 var numero2 = parseFloat(prompt('ingrese el segundo numero'));

 if (numero1 % numero2 == 0 || numero2 % numero1 == 0) {
   
    alert("Los números son múltiplos entre sí.");

} else if (numero1 % numero2 !== 0 || numero2 % numero1 !== 1) {
    
    alert("Los números no son múltiplos entre sí.");
} else{
    alert('tienes que ingresar un numero')
}


