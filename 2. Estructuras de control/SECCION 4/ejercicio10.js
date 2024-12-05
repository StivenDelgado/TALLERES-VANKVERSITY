const numero = parseInt(prompt("Ingrese un número:"));
let sumaDivisores = 0;

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
}

console.log(sumaDivisores === numero ? `${numero} es perfecto.` : `${numero} no es perfecto.`);
