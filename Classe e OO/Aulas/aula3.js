// "Herança" com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if(this.ligado === false)
            this.ligado = true;
        else{ 
        console.log(this.nome + ' ja está ligado');
        return;
        }
    }

    desligar() {
        if(this.ligado ===  true)
            this.ligado = false;
        else {
        console.log(this.nome + ' já está desligado');
        return;
        }
    }
}


const d1 = new DispositivoEletronico('Smartphone');
d1.ligado = true;
d1.ligar();

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Chamar o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }

    metodoExlusivo() {
        console.log('Este metodo só está disponivel para objetos da classe Smartphone')
    }
}

const s1 = new Smartphone('Iphone');
s1.ligar();
s1.ligar();