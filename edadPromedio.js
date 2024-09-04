const prompt = require('prompt-sync')()

let cantUsuarios = parseInt(prompt("Por favor ingrese la cantidad de usuarios: "))

let edades = []

for (let i = 0; i < cantUsuarios; i++) {
    let edad = parseInt(prompt(`Ingrese la edad de los empleados ${i + 1}: `))
    edades.push(edad)
}

function calcularPromedio(edades) {
    let sumaEdades = edades.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
    let promedio = sumaEdades / edades.length
    return promedio
}

let promedioEdades = calcularPromedio(edades)
console.log(`La edad promedio de los empleados es: ${promedioEdades}`)





