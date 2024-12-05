let min = parseInt(prompt("Ingrese el número mínimo del rango: "))
let max = parseInt(prompt("Ingrese el número máximo del rango: "))

let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Número aleatorio entre " + min + " y " + max + ": " + numeroAleatorio);
