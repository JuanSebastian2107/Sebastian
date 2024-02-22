<<<<<<< HEAD
aprobar = 15

proApro = 0
proDesa = 0
aprobados = 0
desaprobados = 0
let datos = [18, 7, 2, 19, 5, 11, 18, 17, 10, 14, 11, 14, 12, 13, 20, 4, 8, 19, 18, 20];

datos.forEach(function(nota){
if (nota >= aprobar){
proDesa += 1
proApro += nota
}
else{
desaprobados += 1
aprobados += nota
}
})

alert(`promedio aprobados: ${aprobados}, Reprobados: ${desaprobados}, Promedio desaprobados: ${proApro}, aprobados: ${proDesa}`)
=======
aprobar = 15

proApro = 0
proDesa = 0
aprobados = 0
desaprobados = 0
let datos = [18, 7, 2, 19, 5, 11, 18, 17, 10, 14, 11, 14, 12, 13, 20, 4, 8, 19, 18, 20];

datos.forEach(function(nota){
if (nota >= aprobar){
proDesa += 1
proApro += nota
}
else{
desaprobados += 1
aprobados += nota
}
})

alert(`promedio aprobados: ${aprobados}, Reprobados: ${desaprobados}, Promedio desaprobados: ${proApro}, aprobados: ${proDesa}`)
>>>>>>> fc5dc4b818b494f7dbfefb8537feb35d44808385
