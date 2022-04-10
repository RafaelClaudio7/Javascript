// Getters e Setters

const _velocidade = Symbol('velocidade') // private


class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade (valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) {
            return;
        }
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) {
            return;
        }
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let index = 0; index < 200; index++) {
        c1.acelerar();
}

console.log(c1);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}
