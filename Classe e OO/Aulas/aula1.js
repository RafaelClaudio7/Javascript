// Classes

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Os metódos criados vão direto para o prototype, não sendo chamados a cada instancia
    falar() {
        console.log(`${this.nome} está falando`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Rafael', 'Claudio');
console.log(p1);

function Pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(this.nome + ' Está Falando');
}
const p2 = new Pessoa2('Cleiton', 'Rasta')

p2.falar();

// A unica diferença é que no primeiro caso constructor é uma classe e no segundo uma function