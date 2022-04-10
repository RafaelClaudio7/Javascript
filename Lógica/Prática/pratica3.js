// Revisão de SetInterval e SetTimeout

// SetInterval, Ações programadas para serem executadas dentro de um intervalo em ms


function somaDoisAleatórios (max, min) {
    let a = Math.random() * (max - min) + min;
    let b = Math.random() * (max - min) + min;
    console.log((a + b).toFixed(2));
}

const intervalo = setInterval(function() {
    somaDoisAleatórios(20,1);
}, 2000);

setTimeout(function() {
    clearInterval(intervalo); // Finaliza o loop
    console.log('Fechei Aqui');
}, 15000);

const repeat = setInterval(function() {
    console.log('Teste');
}, 1000);

setTimeout(function() {
    clearInterval(repeat)
}, 3000);


/*
const inter = setInterval(function() {
    console.log('Repeating')
}, 1000);

setTimeout(function() {
    clearInterval(inter);
    console.log('Interrupting)
});

*/