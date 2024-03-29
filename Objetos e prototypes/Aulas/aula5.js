/* 
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de Protótipo
É o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos encontrar este membro no proprio objeto, primeiro o motor dp JS vai
tentar encontrar este membro no próprio objeto e depois na cadeia de protótipos é 
usada até o topo (null) até encontrar ou não tal membro

*/

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Rafael', 'Claudio');
console.log(pessoa1.nomeCompleto());