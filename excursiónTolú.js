const prompt = require('prompt-sync')()

let gordos = parseInt(prompt("Ingrese el número de gordos: "))
let flacos = parseInt(prompt("Ingrese el número de flacos: "))

let puestos = gordos * 2 + flacos
let bus = Math.floor(puestos / 50)
let comidaGordos = 4 * 4 * 3000 * gordos
let comidaFlacos = 4 * 2 * 3000 * flacos

if (puestos % 50 !== 0) {
    bus += 1
}
console.log("El número de buses requerido para la excursión es: " + bus)

let valorBus
if (puestos <= 200) {
    valorBus = bus * 50000
} else {
    valorBus = bus * 80000
}


console.log("El costo total de los buses es: " + valorBus)
console.log("El costo total de la comida es: " + (comidaFlacos + comidaGordos))
console.log("El costo total de la excursión es: " + (comidaFlacos + comidaGordos + valorBus))