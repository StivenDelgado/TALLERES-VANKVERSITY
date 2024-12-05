let iva = 0.19
let precioProducto = parseFloat(prompt("Escribe el precio del producto: "))

let resultado = (precioProducto * iva) + precioProducto

alert("El precio total incluyendo el iva es: " + resultado)