// Map -> gera um array do mesmo tamanho que o anterior alterando valores

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Construa um array como os valores de num  dobrados
const numEmDobro = numeros.map(valor => valor * 2);

console.log(numEmDobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do obj
// Adicione a chave id em cada obj

const p1 = pessoas.map(obj => obj.nome);

console.log(p1);

const p2 = pessoas.map(obj => ({idade: obj.idade}));

console.log(p2);

const p3 = pessoas.map(function(obj, indice) {
    // Para não alterar o objeto original 
    // const newObj = {...obj}; spread
    // newObj.id = indice;
    // return newObj
    
    obj.id = indice;
    return obj;
})

console.log(p3);