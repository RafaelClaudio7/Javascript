const pessoas = [
    { id: 3, nome: 'Rafael'},
    { id: 2, nome: 'Carol'},
    { id: 1, nome: 'Heloísa'}
];

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2));