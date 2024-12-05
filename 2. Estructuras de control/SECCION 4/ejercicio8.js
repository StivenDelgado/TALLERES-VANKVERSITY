const n = parseInt(prompt("Ingrese el número de términos de la serie:"));
let serie = "";

for (let i = 1; i <= n; i++) {
    const termino = (i % 2 === 0 ? 6 * i : -2 * i);
    serie += `${termino} `;
}

console.log(`Los primeros ${n} términos de la serie son: ${serie.trim()}`);
