const valores = { dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50 };
for (const clave in valores) {
    if (valores[clave] % 2 === 0) {
        console.log(`${clave}: ${valores[clave]} es par`);
    }
}
