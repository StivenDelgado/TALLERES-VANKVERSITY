const inventario = [];

function agregarProducto(nombre, categoria, precio, cantidad, codigo) {
    if (inventario.some(producto => producto.codigo === codigo)) {
        console.log("Error: El código del producto ya existe.");
        return;
    }
    inventario.push({ nombre, categoria, precio, cantidad, codigo });
    console.log("Producto agregado con éxito.");
}

function editarProducto(codigo, nuevosDatos) {
    const producto = inventario.find(p => p.codigo === codigo);
    if (producto) {
        Object.assign(producto, nuevosDatos);
        console.log("Producto actualizado.");
    } else {
        console.log("Producto no encontrado.");
    }
}

function eliminarProducto(codigo) {
    const indice = inventario.findIndex(p => p.codigo === codigo);
    if (indice !== -1) {
        inventario.splice(indice, 1);
        console.log("Producto eliminado.");
    } else {
        console.log("Producto no encontrado.");
    }
}

function mostrarInventario() {
    console.log(inventario);
}

agregarProducto("Camisa", "Ropa", 30, 20, "001");
agregarProducto("Pantalón", "Ropa", 50, 15, "002");
mostrarInventario();
editarProducto("001", { precio: 35 });
eliminarProducto("002");
mostrarInventario();
