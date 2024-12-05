const numeroIf = parseInt(prompt("Ingrese un número:"));
if (numeroIf % 5 === 0) {
    console.log(`${numeroIf} es divisible entre 5.`);
} else {
    console.log(`${numeroIf} no es divisible entre 5.`);
}

const numeroSwitch = parseInt(prompt("Ingrese un número:"));
switch (numeroSwitch % 5) {
    case 0:
        console.log(`${numeroSwitch} es divisible entre 5.`);
        break;
    default:
        console.log(`${numeroSwitch} no es divisible entre 5.`);
}
