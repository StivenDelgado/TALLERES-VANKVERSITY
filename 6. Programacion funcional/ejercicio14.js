function aplicarOperaciones(array, callback) {
    return array.map(callback);
}

const numeros3 = [2, 4, 6];
const resultados = aplicarOperaciones(numeros3, numero => {
    if (numero % 2 === 0) return numero * 2;
    if (numero % 3 === 0) return numero / 3
    else return numero ** 2;
});
console.log(resultados); 
