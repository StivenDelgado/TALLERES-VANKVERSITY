const nombres = ["juan", "ana", "maria", "sofia", "pedro" ];

const nombresProcesados = nombres
    .map(nombre => nombre.toUpperCase())
    .sort();

console.log(nombresProcesados);
