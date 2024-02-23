let numero = prompt("ingresa un numero de teléfono ej: +57-xxxxxxxxx-xx");
let numero1 = numero.slice(4,-3);  

numero1 = numero1.replace(/-/g, ''); 

    console.log(`el numero de teléfono sin prefijos y extensión es ${numero1}`);
