const falar = {
    falar() {
    console.log(this.nome + 'está falando');
    }   
}

const comer = {
    comer() {
        console.log(this.nome + 'Está comendo');
    }
}





//const pessoaPrototype = {...falar, ...comer};
const pessoaPrototype = Object.assign({}, falar, comer);





function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Rafael', 'Claudio')