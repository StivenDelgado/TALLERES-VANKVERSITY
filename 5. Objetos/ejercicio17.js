const empleados = [
    { nombre: "Juan", id: 1, horasTrabajadas: [8, 9, 10, 7, 8] },
    { nombre: "Ana", id: 2, horasTrabajadas: [9, 10, 11, 8, 7] }
];

function agregarHoras(id, horas) {
    const empleado = empleados.find(e => e.id === id);
    if (empleado) {
        empleado.horasTrabajadas.push(horas);
        console.log("Horas agregadas.");
    } else {
        console.log("Empleado no encontrado.");
    }
}

function calcularPago(id, tarifa) {
    const empleado = empleados.find(e => e.id === id);
    if (empleado) {
        const totalHoras = empleado.horasTrabajadas.reduce((a, b) => a + b, 0);
        const pago = totalHoras * tarifa;
        console.log(`El salario de ${empleado.nombre} es $${pago}`);
    } else {
        console.log("Empleado no encontrado.");
    }
}

function empleadosConHorasExtras() {
    return empleados.filter(e => e.horasTrabajadas.reduce((a, b) => a + b, 0) > 40);
}

calcularPago(1, 20);
agregarHoras(1, 8);
console.log(empleadosConHorasExtras());
