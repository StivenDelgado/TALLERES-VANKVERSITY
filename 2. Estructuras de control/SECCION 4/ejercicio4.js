const digito1 = parseInt(prompt("Ingrese el primer dígito:"));
const digito2 = parseInt(prompt("Ingrese el segundo dígito:"));
const digito3 = parseInt(prompt("Ingrese el tercer dígito:"));
const digitos = [digito1, digito2, digito3];

console.log("Números pares generados:");
for (let i of digitos) {
    for (let j of digitos) {
        for (let k of digitos) {
            const numero = parseInt(`${i}${j}${k}`);
            if (numero % 2 === 0) {
                console.log(numero);
            }
        }
    }
}
