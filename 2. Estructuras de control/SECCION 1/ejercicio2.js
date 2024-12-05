let producto = prompt("Menú \n 1. Arroz \n 2. Lentejas \n 3. Crema \n 4. Vino \n Digita el nombre del producto que quieres saber si tiene iva o no ")





switch (producto.toLocaleLowerCase()) {
    case "arroz" || "lentejas":
        console.log("No paga iva el producto")
        break;
    case "crema" || "vino":
        console.log("Paga iva el producto")
        break;

    default:
        console.log("El producto no está en el menú")
        break;
}

switch (producto.toLocaleLowerCase()) {
    case "arroz":
        console.log("No paga iva el producto")
        break;
    case "lentejas":
        console.log("No paga iva el producto")
        break;
    case "crema":
        console.log("Paga iva el producto")
        break;
    case "vino":
        console.log("Paga iva el producto")
        break;
    default:
        console.log("El producto no está en el menú")
        break;
}


if (producto.toLocaleLowerCase() === "lentejas" || producto.toLocaleLowerCase() === "arroz" ) {
    console.log("No paga iva el producto")
}else if (producto.toLocaleLowerCase() === "crema" || producto.toLocaleLowerCase() === "vino" ) {
    console.log("Paga iva el producto")
}else{
    console.log("El producto no está en el menú")
}