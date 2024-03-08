class Triangulo {
 constructor(ladoA, ladoB, ladoC){
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
 }

tipoDeTriángulo() { 
if (this.ladoA == this.ladoB && this.ladoC == this.ladoA){
    console.log('triangulo equilátero, los tres lado tienen la misma longitud');
} else if (this.ladoA != this.ladoC && this.ladoA != this.ladoB && this.ladoC != this.ladoB){
    console.log('triangulo escaleno, los tres lados tienen logitudes diferentes ');
} else console.log('triangulo isósceles, dos lados tienen la misma logitud');
 } 

mayorTamaño() { 
if (this.ladoA >= this.ladoB && this.ladoB >= this.ladoC|| this.ladoA >= this.ladoB && this.ladoA >= this.ladoC){
    console.log(`el valor del lado con un tamaño mayor es ${this.ladoA}`);
} else if (this.ladoB >= this.ladoA && this.ladoA >= this.ladoC || this.ladoB >= this.ladoA && this.ladoB >= this.ladoC){
    console.log(`el valor del lado con un tamaño mayor es ${this.ladoB}`);
} else if (this.ladoC >= this.ladoA && this.ladoC >= this.ladoB) {
    console.log(`el valor del lado con un tamaño mayor es ${this.ladoC}`);}
 }
 }
const triangulo = new triangulo(19,15,17);
console.log(`él triangulo es de tipo ${triangulo.tipoDeTriángulo()}`);
console.log(`el lado de mayor tamaño mide ${triangulo.mayorTamaño()}`);