let descuento = 0.10
let precioProducto = parseFloat(prompt("Escribe el precio del producto: "))

let resultado = precioProducto - (precioProducto * descuento) 

alert("El precio total incluyendo el descuento es: " + resultado)