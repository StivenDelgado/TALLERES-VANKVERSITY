const productos = [
    { precio: 5, cantidad: 15 },
    { precio: 10, cantidad: 5 },
    { precio: 8, cantidad: 20 }
];
const totales = productos
    .filter(producto => producto.cantidad > 10)
    .map(producto => producto.precio * producto.cantidad);
console.log(totales); 
