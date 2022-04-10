// Herança

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (valor) {
    this.preco += valor;
}
Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco += (this.preco * (percentual / 100));
}

const camiseta = new Camiseta('Regata', 10, 'Branca');

console.log(camiseta);

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Azul', 12, 'porcelana');