const nomes = ['Eduardo', 'Maria', 'João'];
// const nomes = new Array('Rafael', 'Maria', João);
nomes[2] = 'Rafael';
//delete nomes[1]; // Remove elemento sem perder indices
console.log(nomes);

// Passagem de Valor por referencia em Arrays
const novo =  nomes;
//novo.pop();

// Passando apenas por valor por cópia, usando o operador spread
const novo2 = [...nomes];
novo2.pop();
console.log(novo2);
console.log(nomes);
console.log(nomes.length); // É atributo do Array

// Como remover atributo e adicionar a uma variavel
const removido = nomes.pop(); // remove o ultimo
// const removido = nomes.shift(); Remove o primeiro e move os indices
console.log(nomes, removido)

// Para adicionar ao final do array
nomes.push('Leandro');
// Para adicionar ao inicio, movimentando indices
nomes.unshift('Carlos');

const nomes2 = ['Rafael', 'Matheus', 'Carlos', 'Maria', 'Samara', 'Rodrigo'];
const novo3 = nomes2.slice(1, 5); // Não inclui limite final
const novo4 = nomes2.slice(0, -2);
console.log(nomes2, novo3, novo4);


const nome1 = 'Rafael Claudio Ferreira Tula';
const nomes3 = nome1.split(' ');   // .join para o caminho inverso, arrays para string
console.log(nomes3)