const cadena = prompt("Ingrese la cadena de ADN:");
let resultado = "";
let contador = 1;

for (let i = 1; i <= cadena.length; i++) {
    if (cadena[i] === cadena[i - 1]) {
        contador++;
    } else {
        resultado += `${cadena[i - 1]}${contador},`;
        contador = 1;
    }
}

console.log(resultado.slice(0, -1));
