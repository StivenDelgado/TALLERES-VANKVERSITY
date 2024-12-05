function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function esAprobado(promedio) {
    return promedio >= 6;
}

function mostrarResultado(aprobado) {
    if (aprobado) {
        console.log("El estudiante aprueba.");
    } else {
        console.log("El estudiante reprueba.");
    }
}

function evaluarEstudiante(notas) {
    const promedio = calcularPromedio(notas);
    const aprobado = esAprobado(promedio);
    mostrarResultado(aprobado);
}

const notasEstudiante = [7, 5, 8];
evaluarEstudiante(notasEstudiante); 