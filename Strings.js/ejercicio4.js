const frase = prompt('Por favor, introduce una frase');

function invertirFrase(frase) {
 return frase.split('').reverse().join('');
}

const fraseInvertida = invertirFrase(frase);
alert(`Frase invertida: ${fraseInvertida}`);