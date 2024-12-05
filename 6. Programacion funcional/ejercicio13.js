const arrays = [[1, 2], [3, 4], [5, 6]];
const plano = arrays.reduce((acumulador, actual) => acumulador.concat(actual), []);
console.log(plano);

