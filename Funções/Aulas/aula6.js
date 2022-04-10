// Funções Callback

function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}


function f1 (callback) {
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
}

function f2 (callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3 (callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(function() {
    f2(function() {
        f3(function() {
            console.log('Hello World');
        })
    })

});

// Para ficar mais organizada a identação é também possível fazer da seguinte forma

f1(callbackF1);

function callbackF1 () {
    f2(callbackF2);
}

function callbackF2() {
    f3(callbackF3);
}

function callbackF3() {
    console.log('Olá Mundo');
}