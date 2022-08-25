// Estudo de Strings

let texto = 'Arroz com Feijão e Salada é muito bom';

console.log(texto.length);

// Tirar um pedaço da string
// slice(start, end)
let arroz = texto.slice(0,5);
console.log(arroz);
// substring(start, end)
let feijao = texto.substring(10, 16);
console.log(feijao);
//substr Obsoleto

// Alterar parte da string
// replace('value', 'new value')
console.log(texto.replace('bom', 'ruim'));

console.log(texto.toUpperCase());

let texto2 = ', pois faz bem para saúde';

let texto3 = texto.concat(texto2);
console.log(texto3);

console.log(texto.charAt(0));