const supermercado = {
    Papa: 20,
    Arroz: 30,
    Lentejas: 25,
    Aceite: 50
};

for (const producto in supermercado) {
    console.log(`${producto}: $${supermercado[producto]}`);
}
