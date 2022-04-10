function retornaFuncao (nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Rafael');
const funcao2 = retornaFuncao('Emanuel')
console.log(funcao());
console.log(funcao2())