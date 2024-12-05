const palabras = ["Hola", "cómo", "estás"];
const oracion = palabras.reduce((acumulador, palabra) => acumulador + " " + palabra);
console.log(oracion); 
