 var resistencia1 = parseFloat(prompt('escribe la primera resistencia'));
 var resistencia2 = parseFloat(prompt('escribe la segunda resistencia'));

 var resistenciaEquivalente = (resistencia1 * resistencia2) / (resistencia1 + resistencia2);

 alert('la resistencia equivalente en paralelo es ' + resistenciaEquivalente)