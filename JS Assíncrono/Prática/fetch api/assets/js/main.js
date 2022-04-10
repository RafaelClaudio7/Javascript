// Fetch api

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(elemento) {
    
    try{
        const href = elemento.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200)
            throw new Error('Erro ao carregar a página');
        const html = await response.text();
        carregaResultado(html);
    }catch(e) {
        console.log(e);
    }
}

function carregaResultado (response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}