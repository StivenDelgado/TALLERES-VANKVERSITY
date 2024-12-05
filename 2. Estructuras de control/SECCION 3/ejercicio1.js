const base = prompt("Ingrese la base (A, T, C, G):").toUpperCase();
const longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
let cadena = "";
for (let i = 0; i < longitud; i++) {
    cadena += base;
}
console.log(cadena);
