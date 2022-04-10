const nome = 'Rafael Tula';

// O For OF percorre o Array pelo valor do par indice valor
// Só Funciona com Array e String
for(let valor of nome) {
    console.log(valor)
}

const pessoa = {
    nome: 'Manoel',
    sobrenome: 'Cabral',
    idade: 64
};
/* Não Iterável
for(let valor of pessoa) {
    console.log(valor[i]);
}*/