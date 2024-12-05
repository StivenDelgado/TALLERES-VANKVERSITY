const numero = parseInt(prompt("Ingrese un número entre 0 y 999:"));
const invertido = parseInt(numero.toString().split("").reverse().join(""));
const suma = numero + invertido;
const esReversible = suma.toString().split("").every(digito => parseInt(digito) % 2 !== 0);

console.log(esReversible ? `${numero} es reversible.` : `${numero} no es reversible.`);
