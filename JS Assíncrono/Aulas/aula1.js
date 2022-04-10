// Promises
function geraNumRandom(min, max) {
  min *= 1000;
  max *= 1000;
  let random = Math.random() * (max - min) - min;

  return Math.floor(random);
}

function esperaTempo(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaTempo("Frase 1", geraNumRandom(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaTempo("Frase 2", geraNumRandom(1, 3)).then((resposta) => {
      console.log(resposta);
      return esperaTempo(7, geraNumRandom(1, 3)).then((resposta) => {
        console.log(resposta);
        return;
      });
    });
  })
  .catch((e) => {
    console.log("Erro:", e);
  });
//('Frase 2', geraNumRandom(1, 3));
//esperaTempo('Frase 3', geraNumRandom(1, 3));
