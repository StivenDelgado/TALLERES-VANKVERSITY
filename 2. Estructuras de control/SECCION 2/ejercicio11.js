let suma = 0;
let contador = 0;
let numero;
do {
    numero = parseFloat(prompt("Ingrese un número (0 para salir):"));
    if (numero !== 0) {
        suma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    console.log(`El promedio es: ${suma / contador}`);
} else {
    console.log("No se ingresaron números.");
}
