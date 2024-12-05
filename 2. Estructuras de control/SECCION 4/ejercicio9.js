let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let factores = "";

for (let i = 2; i <= numero; i++) {
    while (numero % i === 0) {
        factores += `${i} `;
        numero /= i;
    }
}

console.log(`Los factores primos son: ${factores.trim()}`);
