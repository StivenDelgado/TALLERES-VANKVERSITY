const productos = [
    { nombre: "Papa", stock: 5, umbral: 10 },
    { nombre: "Arroz", stock: 20, umbral: 15 },
    { nombre: "Aceite", stock: 8, umbral: 10 }
];

function verificarStock() {
    productos.forEach(producto => {
        if (producto.stock < producto.umbral) {
            console.log(`Alerta: El producto ${producto.nombre} tiene un stock bajo.`);
        }
    });
}

function actualizarStock(nombre, cantidad) {
    const producto = productos.find(p => p.nombre === nombre);
    if (producto) {
        producto.stock += cantidad;
        console.log(`El nuevo stock de ${producto.nombre} es ${producto.stock}.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

verificarStock();
actualizarStock("Papa", 10);
