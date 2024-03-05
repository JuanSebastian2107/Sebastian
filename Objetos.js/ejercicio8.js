class Calculadora{
 constructor(numero1, numero2){
    this.numero1 = numero1;
    this.numero2 = numero2;
}
suma(){
    return this.numero1 + this.numero2; 
}
resta(){
    return this.numero1 - this.numero2;   
}
multiplicacion(){
    return this.numero1 * this.numero2;   
}
division(){
if(this.numero2 != 0){
    return this.numero1 / this.numero2;
}else{
    console.log("no se puede dividir por 0")}
}
}
    const numero1 = parseInt(prompt("ingresa un numero entero"));
    const numero2 = parseInt(prompt("ingresa otro numero entero"));
   
   const calculadora = new calculadora(numero1, numero2);
   
   console.log(`La suma es ${Calculadora.suma()}`); 
   console.log(`La resta es %${Calculadora.resta()}`);
   console.log(`La multiplicación es ${Calculadora.multiplicacion()}`);
   console.log(`La division es ${Calculadora.division()}`);