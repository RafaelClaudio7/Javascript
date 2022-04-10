// Funções Imediatas ou Autoinvocadas
// IIFE 

(function(idade, peso) {
    const sobrenome = 'Tula';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Rafael'));
    }
    falaNome();
}(30, 80))