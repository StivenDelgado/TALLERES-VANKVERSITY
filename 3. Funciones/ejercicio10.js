function eliminarVocales(cadena) {
    const vocales = "aeiou";
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        if (!vocales.includes(cadena[i].toLowerCase())) {
            resultado += cadena[i];
        }
    }

    return resultado;
}

console.log(eliminarVocales("holaaeE"));