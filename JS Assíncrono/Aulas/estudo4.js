function solveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000)
    });
}

async function add1(x) {
    var a = solveAfter2Seconds(20);
    var b = solveAfter2Seconds(30);
    return x + await a + await b; // Irá demorar  2s
}

add1(10).then(v => {
    console.log(v);
});

async function add2(x) {
    var a = await solveAfter2Seconds(20);
    var b = await solveAfter2Seconds(30);
    return x + a + b; // Irá demora 4s
}

add2(10).then(value => {
    console.log(value);
})