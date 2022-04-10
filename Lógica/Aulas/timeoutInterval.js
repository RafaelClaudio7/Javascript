function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {});

}

// console.log(mostraHora());

function funcaoDoInterval () {
    console.log(mostraHora());
}

// setInterval(funcaoDoInterval, 5000);

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000)


// O timeout serve para tira o Interval de um looping
setTimeout(function() {
    clearInterval(timer);
    console.log('Finalizei Aqui')
}, 5000)