let angulo1 = parseFloat(prompt("Escribe el primer angulo interno: "))
let angulo2 = parseFloat(prompt("Escribe el segundo angulo interno: "))
let angulo3 = parseFloat(prompt("Escribe el tercer angulo interno: "))

if ((angulo1 + angulo2 + angulo3) == 180) {
    console.log("Es un triangulo");
}else{
    console.log("No es un triangulo");
}
