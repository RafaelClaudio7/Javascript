// Factory Function

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        /*
        nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },*/
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            
        },
        altura,
        peso,
        /*
        imc() {
            const ind = this.peso / (this.altura * this.altura);
            return ind.toFixed(2);
        }
        */
       // Getter 
       get imc() {
        const ind = this.peso / (this.altura * this.altura);
        return ind.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Rafael', 'Tula', 1.81, 72);
const p2 = criaPessoa('Maria', 'Joaquina', 1.81, 72);

console.log(p1.fala('falando sobre JS'));
//console.log(p1.imc()); // Sem o Getter
console.log(p1.imc);

console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Cristiano Ronaldo Silva';
console.log(p1.nomeCompleto)


function criaProdutos (nome, marca, preco) {
    return {
        nome,
        marca,
        preco,

        descreve() {
            console.log(`O produto é ${this.nome} da marca${this.marca} que custa: R$${this.preco}`)
        }
    }
}



const prod1 = criaProdutos('iphone', 'Apple', 3800);


prod1.descreve();