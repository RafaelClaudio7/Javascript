// Métodos úteis para Promises

// Promise.all Promisse.race Promise.resolve Promise.reject


function geraNumRandom(min, max) {
    min *= 1000;
    max *= 1000;
    let random = Math.random() * (max - min) - min;
  
    return Math.floor(random);
  }
  
  function esperaTempo(msg, tempo) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (typeof msg !== "string"){ 
            reject("Bad Value");
            return;
        }
        resolve(msg.toUpperCase() + ' - Passei na Promise');
      }, tempo);
    });
  }
  

const promises = [
    esperaTempo('Promise 1', geraNumRandom(1, 5)),
    esperaTempo('Promise 2', geraNumRandom(1, 5)),
    esperaTempo('Promise 3', geraNumRandom(1, 5)),
]

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro)
    });