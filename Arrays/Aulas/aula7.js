// Retorne a soma do dobro de todos os pares
// -> Filtrar Pares
// -> Dobrar valores 
// -> Reduzir (Somar Tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobraSoma = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2);

const total = dobraSoma.reduce((a, valor) =>  a += valor);

console.log(total);