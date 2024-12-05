const base = parseInt(prompt("Ingrese la base (a):"));
const exponente = parseInt(prompt("Ingrese el exponente (b):"));
let resultado = 1;

for (let i = 0; i < exponente; i++) {
    resultado *= base;
}

console.log(`El resultado de ${base}^${exponente} es: ${resultado}`);
