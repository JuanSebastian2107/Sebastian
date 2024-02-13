let n1 = Number(prompt('ingresa el primer numero'));
let n2 = Number(prompt('ingresa el segundo numero'));

const media = (num1, num2) => {
 let media = (num1+num2)/2;
 return media;
}
alert(`la media es ${media(n1,n2)}`);