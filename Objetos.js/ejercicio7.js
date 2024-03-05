class Contact {
 constructor(nombre, telefono, email) { 
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email; }
}
class Diary {
 constructor() {
    this.contactos = [];
}
añadirContacto(nuevoContacto) {  
    this.contactos.push(nuevoContacto);  
    console.log("contacto añadido correctamente\n", this.contactos);
}
listaContactos() {
    return this.contactos;  
}
buscarContacto(nombre) {
let contactoEncontrado = this.contactos.find((item) => item.nombre === nombre);
    if (!contactoEncontrado) return "Contacto no encontrado";
    return contactoEncontrado;
}
editarContacto(nombre, nuevoTelefono, nuevoEmail) {
let contactoEncontrado = this.contactos.find(contactos => contactos.nombre === nombre);
    if (contactoEncontrado) {
contactoEncontrado.telefono = nuevoTelefono;
contactoEncontrado.email = nuevoEmail;
    return ("contacto editado correctamente", nombre);
} else
    return ("No se encontró ningún contacto con el nombre");
}
}
const contactos = new Diary()

let option = prompt("ingresa una opción:\n 1. Añadir contacto\n 2. Lista de contactos\n 3. Buscar contacto\n 4. Editar contacto\n 5. Cerrar agenda\n");

switch (option) {
 case "1":
    let nombre = prompt("ingresa el nombre");
    let telefono = prompt("ingresa el teléfono");
    let email = prompt("ingresa el email");
    let nuevoContacto = new Contact(nombre, telefono, email)
    contactos.añadirContacto(nuevoContacto);
break;

case "2":
    console.log("Lista de contactos")
    console.log(contactos.listaContactos());
break

case "3":
    let ContactoAEncontrar = prompt("ingrese el nombre a buscar");
    let contactoEncontrado = contactos.buscarContacto(ContactoAEncontrar);
    console.log(contactoEncontrado);
break;

case "4":
    let nombreEditar = prompt("ingresa el nombre a editar");
    let nuevoTelefono = prompt("ingresa el nuevo teléfono");
    let nuevoEmail = prompt("ingresa el nuevo email");
    let mensaje = contactos.editarContacto(nombreEditar, nuevoTelefono, nuevoEmail);
    console.log(mensaje)
break;

case "5":
    console.log("Cerrar agenda");
break;
default:
    console.log("opción invalida")
break;
}