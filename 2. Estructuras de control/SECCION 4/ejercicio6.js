let dividendo = parseInt(prompt("Ingrese el dividendo:"));
const divisor = parseInt(prompt("Ingrese el divisor:"));
let cociente = 0;

while (dividendo >= divisor) {
    dividendo -= divisor;
    cociente++;
}

console.log(`El cociente es: ${cociente}`);
