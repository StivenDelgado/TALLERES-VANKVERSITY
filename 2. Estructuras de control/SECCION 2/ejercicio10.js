let suma = 0;
for (let i = 1; i <= 10; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    suma += numero;
}
console.log(`El promedio de los 10 números es: ${suma / 10}`);
