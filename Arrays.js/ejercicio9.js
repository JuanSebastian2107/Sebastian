<<<<<<< HEAD
let alumnos = [];
let edadMayor = 0;

while (true) {
let nombre = prompt('Introduce el nombre del alumno ingresa un (*) para terminar)');
if (nombre === '*') {
break;
}
  
  let edad = parseInt(prompt(`Introduce la edad de ${nombre}`));
  alumnos.push({ nombre, edad });

  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad`);
  }

  if (edad > edadMayor) {
    edadMayor = edad;
  }
}

console.log(`Alumno con edad máxima: ${edadMayor}`);

for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].edad === edadMayor) {
    console.log(alumnos[i].nombre);
  }
=======
let alumnos = [];
let edadMayor = 0;

while (true) {
  let nombre = prompt('Introduce el nombre del alumno ingresa un (*) para terminar)');
  if (nombre === '*') {
    break;
  }
  
  let edad = parseInt(prompt(`Introduce la edad de ${nombre}`));
  alumnos.push({ nombre, edad });

  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad`);
  }

  if (edad > edadMayor) {
    edadMayor = edad;
  }
}

console.log(`Alumno con edad máxima ${edadMayor}`);

for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].edad === edadMayor) {
    console.log(alumnos[i].nombre);
  }
>>>>>>> fc5dc4b818b494f7dbfefb8537feb35d44808385
}