function main(){
    let operacion = +prompt("Ingrese una opción:1. Sumar , 2. Restar , 3. Multiplicar , 4. Dividir");
    if(operacion<=0||operacion>4||isNaN(operacion))return alert('Es un dato invalido');
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));
    let resultado = realizarOperacion(operacion, num1, num2);
    alert(`el Resultado es  ${resultado}`);
}

function realizarOperacion(operacion, num1, num2) {
switch (operacion) {
case "1":
return num1 + num2
case "2":
return num1 - num2
case "3":
return num1 * num2
case "4":
return num1 / num2
default: return "ingresa un dato valido"
}
}

main();