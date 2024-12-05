const estudiantes = [
    { nombre: "Juan", edad: 20, matricula: 123, calificaciones: [90, 85, 88] },
    { nombre: "Ana", edad: 22, matricula: 456, calificaciones: [70, 75, 78] }
];

function calcularPromedio(matricula) {
    const estudiante = estudiantes.find(est => est.matricula === matricula);
    if (estudiante) {
        const promedio = estudiante.calificaciones.reduce((a, b) => a + b) / estudiante.calificaciones.length;
        return promedio;
    }
    return null;
}

function actualizarCalificaciones(matricula, nuevasCalificaciones) {
    const estudiante = estudiantes.find(est => est.matricula === matricula);
    if (estudiante) {
        estudiante.calificaciones = nuevasCalificaciones;
        console.log("Calificaciones actualizadas.");
    }
}

console.log(calcularPromedio(123));
actualizarCalificaciones(456, [85, 88, 90]);
console.log(estudiantes);
