function adnMayorTimina(adns) {
    return adns.reduce((mayor, actual) => {
        const timinasActual = (actual.match(/T/gi) || []).length;
        const timinasMayor = (mayor.match(/T/gi) || []).length;
        return timinasActual > timinasMayor ? actual : mayor;
    });
}

console.log(adnMayorTimina(["ATCG", "TTTT", "ACGT"])); 
