const numero = parseInt(prompt("Ingrese un número entero positivo no superior a 1.000.000.000:"));
let esPrimo = numero > 1;

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}

console.log(esPrimo ? `${numero} es primo.` : `${numero} no es primo.`);
