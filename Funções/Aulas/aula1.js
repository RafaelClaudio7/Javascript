// Declaração da Função     (Function Hoisting)

falaOi(); // Hoisting

function falaOi() {
    console.log('Oi');
}

// Funções são Objetos de primeira Classe -> As funções podem ser criadas como dados
// function expression
const souUmDado = function() {
    console.log('Sou um Dado.');
};

// Pode executar a cte como uma funçao normal
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua funçao abaixo');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um Objeto
const obj = {
    falar () { // Método do Objeto
        console.log('Estou a falar');
    }
};

obj.falar();



