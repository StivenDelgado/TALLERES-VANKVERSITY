function contarVocales(cadena) {
    const vocales = "aeiou";
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}


console.log(contarVocales("holaaeE"));
