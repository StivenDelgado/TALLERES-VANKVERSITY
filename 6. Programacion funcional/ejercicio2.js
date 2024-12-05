
function aplicarOperacion(numero, callback) {
   return callback(numero);
}

// Operaciones con el número
function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

console.log(aplicarOperacion(4, raizCuadrada)); 
