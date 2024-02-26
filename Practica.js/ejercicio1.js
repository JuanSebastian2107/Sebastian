function fizzbuzz(numero) {
let multiplo3 = numero % 3 === 0 ? "fizz" : "";
let multiplo5 = numero % 5 === 0 ? "buzz" : "";
  
return (multiplo3 + multiplo5) || numero.toString();
}
let numero = prompt('ingrese un numero');
 console.log(fizzbuzz(numero));

