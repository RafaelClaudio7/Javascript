// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;

    // Atributos Privados

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode ser reescrito, alterado
        configurable: false// configuravel, deletavel ou etc.
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    })
}

const p1 = new Produto('Faca', 200, 5000);
p1.estoque = 200;
delete p1.estoque;
console.log(p1);

console.log(Object.keys(p1));