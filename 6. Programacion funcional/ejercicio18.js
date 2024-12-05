const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8];
const agrupados = numeros5.reduce((resultado, numero) => {
    const clave = numero % 2 === 0 ? "pares" : "impares";
    if (!resultado[clave]) resultado[clave] = [];
    resultado[clave].push(numero);
    return resultado;
}, {});
console.log(agrupados); 
