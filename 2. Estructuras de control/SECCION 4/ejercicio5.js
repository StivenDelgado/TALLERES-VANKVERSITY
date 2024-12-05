const n = parseInt(prompt("Ingrese un número entero positivo:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i / (i + 1);
}

console.log(`El resultado de la serie es: ${suma}`);
