function calculaIMC (peso, altura) {
    const imc = peso / (Math.pow(altura, 2));
    return imc;
}

function MostraIMC (imc) {
    imc = calculaIMC(72, 1.81)
    if(imc >= 18.5 && imc <= 24.5)
    console.log('Peso Adequado:' + imc);
    else
    console.log('erro') // Todas as outras condições
}

MostraIMC();