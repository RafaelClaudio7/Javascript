const pessoa = {
    nome: 'Cleiton',
    idade: 5,
    endereco: {
        local: 'Rua um',
        numero: 60
    }
}


const {nome, idade} = pessoa // Tire de dentro do objeto o nome e a idade 
                            // Do objeto pessoa

console.log(nome, idade)

// Outra Possibilidade

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco: {local, numero } } = pessoa

console.log(local, numero)