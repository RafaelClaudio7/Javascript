/* 
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const dataHoje = new Date();
const dia = dataHoje.getDay();
const numDia = dataHoje.getDate();
const mes = dataHoje.getMonth();
const ano = dataHoje.getFullYear();

const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

console.log(`Hoje é : ${dias[dia]}`);

const hora = dataHoje.getHours();
const minutos = dataHoje.getMinutes();
const segundos = dataHoje.getSeconds();

console.log(`Hora atual é : ${hora} : ${minutos} : ${segundos}`)