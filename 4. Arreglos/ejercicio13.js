function contarLetraC(nombres) {
    let contador = 0;
    nombres.forEach(nombre => {
        contador += (nombre.match(/c/gi) || []).length;
    });
    console.log(`La letra "c" aparece ${contador} veces.`);
}

contarLetraC(["Carlos", "Cecilia", "Oscar"]);
