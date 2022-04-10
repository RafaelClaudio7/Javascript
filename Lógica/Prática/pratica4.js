// Laços de Repetição 

let x = 1;

while(x < 10) {
    imprimeData();
    x++;
}

function imprimeData() {
    const d = new Date();
    console.log(`As horas são: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}


const carros = ['Uno', 'Stilo', 'Palio', 'Saveiro'];

for(let x in carros) {
    console.log(carros[x]);
}

for(let x of carros) {
    console.log(x);
}

for(let a = 0;a < carros.length; a++) {
    carros[a] = `Carro${a}`;
    console.log(carros)
}


do{
    console.log('Alouuuuuu');
    x--;
}while(x > 5) 


const pessoa = {
    nome: 'Rafael',
    idade: 25,
    cpf: 14610177692
};


const arrayDeValor = [];

for(let chave in pessoa) {
    console.log(chave);
    arrayDeValor.push(chave);
}




console.log(arrayDeValor);