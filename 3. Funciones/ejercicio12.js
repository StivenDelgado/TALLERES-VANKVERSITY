function evaluarAprobacion(nota1, nota2, nota3, nota4, nota5) {
    const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    if (promedio >= 3.0) {
        return `El estudiante aprobó con un promedio de ${promedio}.`;
    } else {
        return `El estudiante no aprobó, su promedio fue de ${promedio}.`;
    }
}

console.log(evaluarAprobacion(3.0, 4.0, 2, 2.9, 2.9));
