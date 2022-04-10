// Métodos importantes para objetos

// Como copiar atributos de um objeto para outro

const produto = {nome: 'Caneca', preco: 2}
//const outraCoisa = produto;
const outraCoisa = {...produto, material: 'porcelana'};

const caneca = Object.assign({}, produto);

console.log(caneca);


produto.nome = 'Camisa';
console.log(outraCoisa);
console.log(produto);


console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto));

console.log(Object.entries(produto));