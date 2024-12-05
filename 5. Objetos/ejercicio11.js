const continentes = {
    Asia: ["China", "Japón", "India", "Corea del Sur", "Tailandia"],
    Europa: ["España", "Francia", "Alemania", "Italia", "Suecia"],
    América: ["Estados Unidos", "México", "Brasil", "Argentina", "Canadá"],
    África: ["Egipto", "Sudáfrica", "Nigeria", "Kenia", "Ghana"],
    Oceanía: ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Papúa Nueva Guinea"]
};

const continente = prompt("Ingrese un continente (Asia, Europa, América, África, Oceanía):");
if (continentes[continente]) {
    console.log(`Países en ${continente}: ${continentes[continente].join(", ")}`);
} else {
    console.log("Continente no encontrado.");
}
