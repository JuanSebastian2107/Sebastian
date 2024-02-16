function numero(){

    let num1 = Number(prompt("ingresar el  primer numero")); 
    let num2 = Number(prompt("ingresar el segundo numero")); 
    let num3 = Number(prompt("ingresar el tercer numero")); 
        
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let intermedio = (num1 + num2 + num3) - menor - mayor;
    alert(`el dato mayor es ${mayor}, el intermedio es ${intermedio}, el menor es ${menor}`)    
  }
      numero()