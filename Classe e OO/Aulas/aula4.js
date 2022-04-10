// Métodos de Instancia e Estaticos 

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    
    // Métodos de Instancia
    aumentarVolume() {
        if(this.volume <= 100) {
            this.volume += 2;
        }else return;
    }

    diminuirVolume() {
        if(this.volume >= 0) {
            this.volume -= 2;
        }else return;
    }

    // Método Estático
    static trocaPilha() {
        console.log('Metodo estatico que não acessa os valores da instancia e do construtor')
    }
}


const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();