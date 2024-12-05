const bases = ["A", "T", "C", "G"];
const base1 = bases[Math.floor(Math.random() * bases.length)];
let base2;
do {
    base2 = bases[Math.floor(Math.random() * bases.length)];
} while (base1 === base2);

const longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
let porcentaje = parseInt(prompt("Ingrese el porcentaje de la primera base (entre 1 y 99):"));
while (porcentaje < 1 || porcentaje > 99) {
    console.log("El porcentaje debe estar entre 1 y 99.");
    porcentaje = parseInt(prompt("Ingrese el porcentaje de la primera base (entre 1 y 99):"));
}

const base1Count = Math.floor((longitud * porcentaje) / 100);
const base2Count = longitud - base1Count;

let cadena = base1.repeat(base1Count) + base2.repeat(base2Count);
cadena = cadena.split("").sort(() => Math.random() - 0.5).join("");

console.log(`Base 1: ${base1}, Base 2: ${base2}`);
console.log(cadena);
