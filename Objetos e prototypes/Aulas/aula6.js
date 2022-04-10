/*

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA);
*/

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco -= (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco += (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 79.9);
p1.desconto(10);
console.log(p1);

const p2 = {
    nome: 'Tênis',
    preco: 200
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(20);
console.log(p2);

// Outra forma de criar o Obj e atribuir um prototype de outro construtor a ela é 

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 32
    }
})