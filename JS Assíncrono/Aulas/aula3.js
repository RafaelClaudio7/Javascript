// Async Await

function geraNumRandom(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  let random = Math.random() * (max - min) - min;

  return Math.floor(random);
}

function esperaTempo(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Bad Value");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na Promise");
    }, tempo);
  });
}

/*
esperaTempo('Fase 1', geraNumRandom())
    .then(valor => {
        console.log(valor)
        return esperaTempo('Fase 2', geraNumRandom())
    })
    .then(fase => {
        console.log(fase);
        return esperaTempo('Fase 3', geraNumRandom());
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => console.log(e));
*/

async function executa() {
    try {
        const fase1 = await esperaTempo('Fase 1', geraNumRandom());
        console.log(fase1);
    
        const fase2 = await esperaTempo('Fase 2', geraNumRandom());
        console.log(fase2);
    
        const fase3 = await esperaTempo('Fase 3', geraNumRandom());
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3);
    }catch(erro) {
        console.log(erro)
    }
}

executa();