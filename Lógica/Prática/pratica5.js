const numeros = [12, 2, 54, 3, 5, 6, 7, 9, 1];

const pessoas = [
    {
        nome: 'Rafael',
        curso: 'Ciencias',
        idade: 23,
        id: 114
    },
    {
        nome: 'Roberta', 
        curso: 'Matematica',
        idade: 21,
        id: 13
    },
    {
        nome:  'Talita',
        curso: 'Administração',
        idade: 32,
        id: 27
    }
]

const [pessoa, pessoa2, pessoa3] = pessoas;
console.log(pessoa.id);


function manipula([pessoa1, pessoa2] = pessoas) {
    let aux;
    pessoa1.nome = 'Claudio';
    let {nome} = pessoa1;
    console.log(nome);
    if(pessoa1.id > pessoa2.id) {
        aux = pessoa1;
        pessoas[0] = pessoa2;
        pessoas[1] = aux; 
    }

    console.log(pessoas);
}

manipula();

const arrayGrande = [...pessoas, ...numeros];

console.log(arrayGrande);