let respuesta;
do {
    respuesta = prompt("¿Desea salir? (S/N):").toUpperCase();
} while (respuesta !== "S");
console.log("El programa se ha detenido.");
