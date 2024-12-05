const secuencia1 = prompt("Ingrese la secuencia principal:");
const secuencia2 = prompt("Ingrese la sub-secuencia:");
const posicion = secuencia1.indexOf(secuencia2);

if (posicion !== -1) {
    console.log(`La primera posición de "${secuencia2}" en "${secuencia1}" es: ${posicion}`);
} else {
    console.log("-1 (No se encuentra la sub-secuencia)");
}
