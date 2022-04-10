// Filter -> Sempre irá retornar um array, com a mesma quantidade de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const num2 = [];

var j = 0;

for(let i = 0; i < numeros.length; i++) {

    if(numeros[i] > 10){
        num2[j] = numeros[i];
        j++;
    }
}

console.log(num2);


const numerosFiltrados = numeros.filter(valor=> valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const p1 = pessoas.filter(valor => valor.nome.length > 5);
console.log(p1);

const p2 = pessoas.filter(valor => valor.idade > 50);
console.log(p2);

const p3 = pessoas.filter(valor => {
    return valor.nome.toLocaleLowerCase().endsWith('a');
})

console.log(p3);