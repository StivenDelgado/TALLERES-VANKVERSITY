
function imprimirConRetraso(mensaje, callback) {
    setTimeout(() => {
        callback(mensaje);
    }, 2000); 
}

function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

 imprimirConRetraso("Hola, este mensaje se muestra después de 2 segundos", mostrarMensaje);
