const capicua =(numero)=>{
return numero.toString().split("").reverse().join("")== numero;
}

let string = +prompt("ingrese un string numérico");

if(isNaN(string))
{
 alert("el dato ingresado no es un numero");
}
else {console.log(capicua(string)); }