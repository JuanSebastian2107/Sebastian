let numeros =[102,178,333,487,99,13,22,845,];
numeros.push(245,30000,50);
alert(numeros);

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
 suma += numeros[i];
}
let media = suma / numeros.length;
alert(`La media de los valores en el array es ${media}`);
