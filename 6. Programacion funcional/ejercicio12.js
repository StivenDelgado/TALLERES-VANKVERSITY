const palabras2 = ["hola", "adiós", "sol", "estrella"];
const agrupado = palabras2.reduce((acumulador, palabra) => {
    const longitud = palabra.length;
    if (!acumulador[longitud]) acumulador[longitud] = [];
    acumulador[longitud].push(palabra);
    return acumulador;
}, {});
console.log(agrupado); 
