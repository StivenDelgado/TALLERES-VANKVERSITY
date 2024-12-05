const palabras3 = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuencias = palabras3.reduce((contador, palabra) => {
    contador[palabra] = (contador[palabra] || 0) + 1;
    return contador;
}, {});
console.log(frecuencias);
