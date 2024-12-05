let longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
while (longitud % 10 !== 0) {
    console.log("La longitud debe ser múltiplo de 10.");
    longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
}

const guanina = longitud / 10;
const citosina = guanina * 4;
const timina = guanina * 2;
const adenina = guanina * 3;

let cadena = "G".repeat(guanina) +
             "C".repeat(citosina) +
             "T".repeat(timina) +
             "A".repeat(adenina);

cadena = cadena.split("").sort(() => Math.random() - 0.5).join("");
console.log(cadena);
