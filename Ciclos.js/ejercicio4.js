for(let i = 1; i <= 10; i++){
 let factor = 1;
for(let j = 1; j <= i; j++){
  factor *= j;
}
console.log(`el factorial de ${i} es: ${factor}`)
}