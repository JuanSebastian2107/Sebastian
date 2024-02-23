 let nombre = prompt('ingrese su nombre completo');

let minusculas = nombre.toLowerCase();
alert(`el nombre en minusculas es: ${minusculas}`);

let mayusculas = nombre.toUpperCase();
alert(`el nombre en mayusculas es: ${mayusculas}`);

function capitalizeAfterSpace(string) {
return string.split(' ').map(word => {
if (word.length > 0) {
return word.charAt(0).toUpperCase() + word.slice(1);
} else {
return word;
}
}).join(' ');
}
let textoModificado = capitalizeAfterSpace(nombre);
alert(textoModificado);
