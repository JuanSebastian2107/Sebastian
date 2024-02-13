let ahorro = 0;
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let i = 0; i < meses.length; i++) {
    let mes = meses[i];
    ahorro += +prompt("Ingrese la cantidad que ahorro el mes de " + mes);
    console.log(`Hasta el mes de ${mes} lleva ahorrado ${ahorro}`);
}