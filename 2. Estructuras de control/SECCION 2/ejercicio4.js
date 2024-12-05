const n = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
for (let i = 1; i <= n; i++) {
    const nota1 = parseFloat(prompt(`Ingrese la primera nota del estudiante ${i}:`));
    const nota2 = parseFloat(prompt(`Ingrese la segunda nota del estudiante ${i}:`));
    const nota3 = parseFloat(prompt(`Ingrese la tercera nota del estudiante ${i}:`));
    const promedio = (nota1 + nota2 + nota3) / 3;
    console.log(`El promedio del estudiante ${i} es: ${promedio}`);
}
