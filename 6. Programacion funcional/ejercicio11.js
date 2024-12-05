const ventas = [
    { producto: "A", cantidad: 10, precio: 2 },
    { producto: "B", cantidad: 5, precio: 3 }
];
const totalVentas = ventas.map(venta => venta.cantidad * venta.precio).reduce((total, actual) => total + actual, 0);
console.log(totalVentas); 
