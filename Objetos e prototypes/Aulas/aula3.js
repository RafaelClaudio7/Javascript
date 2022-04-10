// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        configurable: false, // configuravel, deletavel ou etc.
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('O estoque deve ser um número!');
            }
            estoquePrivado = valor;

        }
    });
}

const p1 = new Produto('Camisa', 200, 30);
p1.estoque = 20;
console.log(p1.estoque);