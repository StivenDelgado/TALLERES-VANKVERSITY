const citas = {
    123: { nombre: "Juan Pérez", dia: "Lunes", hora: "10:00 AM" },
    456: { nombre: "Ana Gómez", dia: "Martes", hora: "2:00 PM" },
    789: { nombre: "Carlos Ruiz", dia: "Miércoles", hora: "11:30 AM" }
};

function consultarCita(documento) {
    const cita = citas[documento];
    if (cita) {
        console.log(`Nombre: ${cita.nombre}`);
        console.log(`Día: ${cita.dia}`);
        console.log(`Hora: ${cita.hora}`);
        const cambiar = prompt("¿Desea cambiar el día o la hora de su cita? (sí/no)");
        if (cambiar.toLowerCase() === "sí") {
            const nuevoDia = prompt("Ingrese el nuevo día:");
            const nuevaHora = prompt("Ingrese la nueva hora:");
            cita.dia = nuevoDia;
            cita.hora = nuevaHora;
            console.log("Cambio realizado con éxito.");
            console.log(`Nueva cita: Día: ${cita.dia}, Hora: ${cita.hora}`);
        }
    } else {
        console.log("Cita no encontrada.");
    }
}

consultarCita(123);
