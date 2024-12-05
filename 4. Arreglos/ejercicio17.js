let arr = [5, 7, 90, 2, 5, 3, 8, 99];
arr.forEach(a => {
    arr.forEach(b => {
        if (a + 1 === b) console.log(`${a} y ${b} son consecutivos`);
    });
});
