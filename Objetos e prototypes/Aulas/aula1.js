// Revisão sobre objetos

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Tula'
};

// Notação Ponto
console.log(pessoa.nome);
// Outra Forma
console.log(pessoa['nome']);

const pessoa1 = new Object();
pessoa1.nome = 'Rafael';
pessoa1.sobrenome = 'Tula';

console.log(pessoa1.nome, pessoa1.sobrenome);

// Para apagar atributo do obj use o delete
delete pessoa1.nome;
console.log(pessoa1);

// Formas de criar objetos em grande numero
// Factory Functions / Constructor Functions / Classes-> Ja usei em c++

// Factory
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome, 
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        }
    };
} 

const p1 = criaPessoa('Rafael', 'Claudio');
console.log(p1.nomeCompleto);



// Constructor 
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Impede de serem feitas alterações aos volores do objeto
}

const p2 = new Pessoa('Cleiton', ' Rasta');