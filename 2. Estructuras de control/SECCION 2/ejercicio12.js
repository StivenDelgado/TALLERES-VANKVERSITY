const n = parseInt(prompt("Ingrese un número:"));
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma += i ** 2;
}
console.log(`La suma de los cuadrados de los números entre 1 y ${n} es: ${suma}`);
