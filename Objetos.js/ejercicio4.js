class Alumno {
 constructor(nombre,nota){
  this.nombre = nombre;
  this.nota = nota;
 }
 NotaFinal(nota) {
if (nota >= 3.5) {  
  console.log(`el alumno ${this.nombre} fue aprobado con la nota  ${nota}`)
 } else{
  console.log(`el alumno ${this.nombre} fue desaprobado con la nota ${nota}`)
 }
 }
getNota() { return this.nota;
 }
setNota(nota) { this.nota = nota;
 }
getNombre() { return this.nombre;
 }
setNombre(nombre) {this.nombre = nombre;
 }
 }
const Alumno1 = new Alumno('Roberto Carlos'); 
Alumno1.NotaFinal(3.8);

const Alumno2 = new Alumno('Jose Maria');
Alumno2.NotaFinal(2.9);






