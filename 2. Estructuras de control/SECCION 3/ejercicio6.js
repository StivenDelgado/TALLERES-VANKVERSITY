const secuencia1 = prompt("Ingrese la secuencia principal:");
const secuencia2 = prompt("Ingrese la sub-secuencia:");
let count = 0;
let posicion = 0;

while ((posicion = secuencia1.indexOf(secuencia2, posicion)) !== -1) {
    count++;
    posicion++;
}

console.log(`La sub-secuencia "${secuencia2}" aparece ${count} veces en "${secuencia1}".`);
