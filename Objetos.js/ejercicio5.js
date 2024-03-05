class Persona {
 constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
 }
 mayorDeEdad(edad) {
if (edad >= 18){
    console.log(`${this.nombre} tiene ${edad} años, y es mayor de edad`)
}else {
    console.log(`${this.nombre} tiene ${edad} años, y no es mayor de edad`)
}
}
getNombre(){
    return this.nombre;
}
setNombre(nombre) {
    this.nombre = nombre;
}
getEdad(){
    return this.edad;
}
setEdad(){
    this.edad = edad;
}
}
const Persona1 = new Persona('Napoleon Bonaparte');
Persona1.mayorDeEdad(51);


const Persona2 = new Persona('Sebastian');
Persona2.mayorDeEdad(17);