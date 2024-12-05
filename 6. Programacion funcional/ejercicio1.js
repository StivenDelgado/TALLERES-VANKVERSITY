function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}


sumar(3, 5, function(resultado) {
    console.log("El resultado de la suma es:", resultado);
});
