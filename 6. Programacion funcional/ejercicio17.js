const numeros = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicados = numeros.reduce((unicos, numero) => {
    if (!unicos.includes(numero)) unicos.push(numero);
    return unicos;
}, []);
console.log(sinDuplicados); 
