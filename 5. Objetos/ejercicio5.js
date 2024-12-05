const usuarios = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
};

let habilitados = 0;
for (const usuario in usuarios) {
    if (usuarios[usuario] === "habilitado") {
        habilitados++;
    }
}

console.log(`Usuarios habilitados: ${habilitados}`);
