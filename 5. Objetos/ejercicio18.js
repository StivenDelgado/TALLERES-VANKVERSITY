const habitaciones = [
    { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
    { numero: 102, tipo: "Doble", disponible: true, reservas: [] },
    { numero: 103, tipo: "Normal", disponible: false, reservas: [] }
];

function reservarHabitacion(numero, cliente, diasReservados) {
    const habitacion = habitaciones.find(h => h.numero === numero && h.disponible);
    if (habitacion) {
        habitacion.reservas.push({ cliente, diasReservados });
        habitacion.disponible = false;
        console.log("Habitación reservada.");
    } else {
        console.log("Habitación no disponible.");
    }
}

function cancelarReserva(numero, cliente) {
    const habitacion = habitaciones.find(h => h.numero === numero);
    if (habitacion) {
        habitacion.reservas = habitacion.reservas.filter(r => r.cliente !== cliente);
        habitacion.disponible = true;
        console.log("Reserva cancelada.");
    } else {
        console.log("Habitación no encontrada.");
    }
}

function habitacionesDisponibles(tipo) {
    return habitaciones.filter(h => h.disponible && h.tipo === tipo);
}

reservarHabitacion(101, "Juan Pérez", 3);
console.log(habitacionesDisponibles("Suite"));
cancelarReserva(101, "Juan Pérez");
console.log(habitacionesDisponibles("Suite"));
