/*

Tratamento de Erros em Javascript 
    Try / Catch / Throw


*/

/*
try {
    console.log(naoExisto);
} catch(e) {
    console.log('naoExisto não existe.')
    console.log(e)
}

*/

function soma(x, y) {
    if(
        typeof x !== 'number' || 
        typeof y !== 'number') 
    {
            throw new Error('x e y precisam ser numeros!');    
    }
    return x + y;
}


try {
    console.log(soma(1, 3));
    console.log(soma(1, '3'));
} catch(err) {
    //console.log(err);
    console.log('Só insira números');
}