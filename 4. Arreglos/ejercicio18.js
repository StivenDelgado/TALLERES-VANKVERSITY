let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

nombres.forEach(nombre => {
    if (nombre === "Maria") contador++;
});

console.log(`Maria aparece ${contador} veces.`);
