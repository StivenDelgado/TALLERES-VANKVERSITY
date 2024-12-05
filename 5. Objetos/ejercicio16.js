const parqueadero = [];

function ingresarVehiculo(marca, placa, horaEntrada) {
    parqueadero.push({ marca, placa, horaEntrada });
    console.log("Vehículo ingresado.");
}

function eliminarVehiculo(placa) {
    const indice = parqueadero.findIndex(v => v.placa === placa);
    if (indice !== -1) {
        parqueadero.splice(indice, 1);
        console.log("Vehículo eliminado.");
    } else {
        console.log("Vehículo no encontrado.");
    }
}

function calcularPago(placa, horaSalida) {
    const vehiculo = parqueadero.find(v => v.placa === placa);
    if (vehiculo) {
        const tiempo = horaSalida - vehiculo.horaEntrada;
        const costo = tiempo * 2500;
        console.log(`El vehículo con placa ${placa} debe pagar: $${costo}`);
    } else {
        console.log("Vehículo no encontrado.");
    }
}


ingresarVehiculo("Toyota", "ABC123", 9); 
calcularPago("ABC123", 11); 
eliminarVehiculo("ABC123");
