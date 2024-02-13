let contador = 0;
for (let i = 1; i <= 5; i++) {
if (Number(prompt("Ingrese la nota " + i)) >= 3) contador++;
}
alert(`Las notas que fueron mayores o iguales a (3.0) son ${contador}`); 