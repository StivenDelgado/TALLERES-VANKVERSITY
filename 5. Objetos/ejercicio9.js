const tienda = { Papa: 20, Arroz: 30, Lentejas: 25, Aceite: 50, Frijoles: 35 };

const producto = prompt("Ingrese el nombre del producto:");
if (tienda[producto]) {
    console.log(`El precio de ${producto} es $${tienda[producto]}`);
} else {
    console.log("Producto no encontrado.");
}
