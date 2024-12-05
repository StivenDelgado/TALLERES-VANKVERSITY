// Array de números
const numeros = [3, 6, 9, 12, 15, 18];

// Usar map para duplicar los números
const numerosDuplicados = numeros.map(numero => numero * 2);

// Usar filter para obtener solo los mayores de 10
const mayoresDeDiez = numerosDuplicados.filter(numero => numero > 10);

console.log("Números originales:", numeros);
console.log("Números duplicados:", numerosDuplicados);
console.log("Números mayores de 10:", mayoresDeDiez);
