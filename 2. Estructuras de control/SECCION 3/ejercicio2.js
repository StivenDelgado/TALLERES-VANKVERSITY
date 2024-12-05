const bases = ["A", "T", "C", "G"];
const base1 = bases[Math.floor(Math.random() * bases.length)];
let base2;
do {
    base2 = bases[Math.floor(Math.random() * bases.length)];
} while (base1 === base2);

const longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
let cadena = "";
for (let i = 0; i < longitud; i++) {
    cadena += Math.random() < 0.5 ? base1 : base2;
}
console.log(`Base 1: ${base1}, Base 2: ${base2}`);
console.log(cadena);
