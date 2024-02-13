let celsius = Number(prompt("Ingrese la temperatura en grados Celsius"));

function temperatura() {
  let celsiusA = parseInt(prompt("Para convertir los grados Celsius a grados Farenheit ingrese '1' / Para convertirlos a grados Kelvin ingrese '2' "));

if (celsiusA == "1") {
  celsiusA = F = (9 * celsius) / 5 + 32;
  alert(`La temperatura en grados Farenheit es de ${celsiusA}`);
} else if (celsiusA == "2") {
  celsiusA = K = celsius + 273.15;
  alert(`La temperatura en grados Kelvin es de ${celsiusA}`);
}else{
 alert('ingresa un dato valido')
}
}temperatura();