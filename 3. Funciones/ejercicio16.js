function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto < 200) {
        descuento = 0; 
    } else if (monto >= 200 && monto <= 400) {

        if (medioPago === 'E') {
            descuento = 0.30;
        } else if (medioPago === 'D') {
            descuento = 0.20; 
        } else if (medioPago === 'C') {
            descuento = 0.10; 
        } else {
            return "Medio de pago no válido.";
        }
    } else {
        descuento = 0.40;
    }

    const montoFinal = monto - (monto * descuento);
    return montoFinal;
}
