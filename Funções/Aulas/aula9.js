// Função Construtora
// Assim como a Factory ela retorna um Objeto
// Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    const ID = 123; // Basta não usar o this para criar atributos e metodos privados 

    const metodoInterno = function () {
    console.log('Eu sou Metodo Privado');
    }; 
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Eu sou um Método');
    };
}

const p1 = new Pessoa('Rafael', 'Claudio');
console.log(p1.nome, p1.ID);
const p2 = new Pessoa('Marcos', 'Junior')

p1.metodo();

