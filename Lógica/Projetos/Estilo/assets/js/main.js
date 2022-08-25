const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const bgBody = estilosBody.backgroundColor;


for(let p of ps) {
    p.style.backgroundColor = bgBody;
    p.style.color = '#fff';
}