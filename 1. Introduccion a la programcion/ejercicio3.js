let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
let meses = parseInt(prompt("Ingrese los meses de plazo para el credito: "));
let porct = 0.05;

alert((precioProducto * porct)  + (precioProducto / meses));
