const numeroIf = parseInt(prompt("Ingrese un número entre 1 y 15:"));
if (numeroIf <= 1) {
    console.log(`${numeroIf} no es primo.`);
} else {
    let esPrimo = true;
    for (let i = 2; i < numeroIf; i++) {
        if (numeroIf % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(`${numeroIf} es primo.`);
    } else {
        console.log(`${numeroIf} no es primo.`);
    }
}


const numeroSwitch = parseInt(prompt("Ingrese un número entre 1 y 15:"));
switch (true) {
    case numeroSwitch <= 1:
        console.log(`${numeroSwitch} no es primo.`);
        break;
    case [2, 3, 5, 7, 11, 13].includes(numeroSwitch):
        console.log(`${numeroSwitch} es primo.`);
        break;
    default:
        console.log(`${numeroSwitch} no es primo.`);
}
