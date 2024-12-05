const numero = prompt("Ingrese un número entero no negativo:");
const ocurrencias = {};

for (let digito of numero) {
    ocurrencias[digito] = (ocurrencias[digito] || 0) + 1;
}

const maxOcurrencias = Math.max(...Object.values(ocurrencias));
console.log(`El dígito que más se repite tiene ${maxOcurrencias} ocurrencias.`);
