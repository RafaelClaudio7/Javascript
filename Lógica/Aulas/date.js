
//const tresHoras = 60 * 60 * 60 * 1000 // milesimos de segundos
//const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix
//console.log(data.toString())
//const data = new Date(2019,3, 20, 15, 14, 27, 500); // mes é um array
//console.log(data.toString())

const data2 = new Date('2019-04-20 20:20:59')
console.log('Dia', data2.getDate()); // Obtem o numero do dia
console.log('Mês', data2.getMonth()); // Obtem o numero do mes
console.log('Ano', data2.getFullYear()); // Obtem o numero do ano
console.log('Hora', data2.getHours()); // Obtem o numero da hora 
console.log('Min', data2.getMinutes()); // Obtem o numero dos minutos
console.log('Seg', data2.getSeconds()); // Obtem o numero dos segundos
console.log('ms', data2.getMilliseconds()); // Obtem o numero dos milisegundos
console.log('Dia Semana', data2.getDay()); // Obtem o numero do dia da semana 0->domingo e 6-> sabado
console.log(data2.toString());