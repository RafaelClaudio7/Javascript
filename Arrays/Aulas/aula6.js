// Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os numeros (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0/* Valor inicial do acumulador*/ );

console.log(total);


// Retorne a pessoa mais velha 

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const velha = pessoas.reduce(function(acumulador, obj) {
    if(obj.idade > acumulador) {
        acumulador = obj.idade;
    }
    return acumulador;
}, 0);

// Do jeito que o professor fez
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);





console.log(velha)

