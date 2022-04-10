try {
    // É executada quando não há erros
    console.log('Abri um Arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o Arquivo');
} catch (error) {
    // É Executando quando há erros
    console.log('Tratando o Erro');
} finally {
    // Sempre Executa
    console.log('Eu sempre sou Executado');
}

// É possivek Aninha-los


function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando Instância de Date.');
    }
    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    console.log(retornaHora(11))
}catch(e) {
    //Tratar Erro
} finally {
    console.log('Tenha um Bom Dia')
}



const hora = retornaHora()
console.log(hora)