// Return

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto; 
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('Mundo!');
console.log(resto);