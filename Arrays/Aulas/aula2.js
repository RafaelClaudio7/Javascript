// Método Splice

const nomes = ['Rafael', 'Maria', 'Pedro', 'Gabriel', 'Rodolfo'];

// nomes.splice(índice, delete, elem1, elem2);

// pop

const removidos = nomes.splice(3, 2, 'Renato');

console.log(nomes, removidos);