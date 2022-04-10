const frutas = ['Pera', 'Maçã', 'Uva'];

// O For In percorre o indice de arrays

for (let  indice in frutas) {
    console.log(indice)
}

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Tula',
    idade: 22
};

// Em objetos o For In vai iterar sobre as chaves do par chave valor

for (let  chave in pessoa) {
    console.log(chave)
}