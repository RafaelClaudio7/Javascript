// Parametros de função

function funcao() {
    console.log(arguments[0]); // So funciona com funções definidas com a palavra reservada
}

funcao('parametro'); // Apesar de ser uma função que não possui parametros 
                    // O js permite que voce coloque sem gerar erros, apenas sera desconsiderado


function  Soma() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }

    console.log(total);
}

Soma(1, 2, 3, 4);

// Valores Padrão 
function somaDois (a, b = 0) {
    console.log(a + b);
}

somaDois(3, 2);
somaDois(3);

// Desestruturação em funções
function desestrutura ({nome, idade, sobrenome}) {
    console.log(nome, sobrenome, idade);
}

desestrutura({ nome:'Rafael', sobrenome:'Claudio', idade:22 });

function desestruturaArray ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

desestruturaArray(['Rafael', 'Tula', 30]);

function conta(operador, acumulador, ...numeros) {
    for (const numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;

    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);