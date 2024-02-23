let productos = prompt("ingrese los productos de una cesta separados por una coma");

let Separa = productos.split(",");

console.log("lista de productos:");
let resultado = Separa.forEach(producto =>{
    console.log(producto);
});