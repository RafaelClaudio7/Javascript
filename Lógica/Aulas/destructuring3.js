function rand({ min = 0, max = 1000}) { //Parâmetro Padrão
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40}))