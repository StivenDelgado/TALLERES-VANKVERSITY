let a = parseFloat(prompt("Ingrese el coeficiente a: "));
let b = parseFloat(prompt("Ingrese el coeficiente b: "));
let c = parseFloat(prompt("Ingrese el coeficiente c: "));

let discriminante = b * b - 4 * a * c;

if (discriminante < 0) {
     console.log("La ecuación no tiene soluciones reales.");
} else if (discriminante === 0) {
    let x = -b / (2 * a);
     console.log("La ecuación tiene una solución real: x = " + x);
} else {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
     console.log("La ecuación tiene dos soluciones reales: x1 = " + x1 + ", x2 = " + x2);
}

