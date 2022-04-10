const data = new Date("1987-04-21 00:00:00");
let diaSemana = data.getDay();

/*
switch (diaSemana) {
    case 0:
        diaSemanaTxt = 'Domingo';
        break;
    case 1:
        diaSemanaTxt = 'Segunda-Feira';
        break;
    case 2: 
        diaSemanaTxt = 'Terça-Feira';
        break;
    case 3: 
        diaSemanaTxt = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTxt = 'Quinta-Feira'
        break;
    case 5:
        diaSemanaTxt = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTxt = 'Sábado';
        break;
} */

// Outra forma é utlizar o retorno, possibilitando add um retorno padrao caso n entre em nenhuma condição

function getDiaSemana(diaSemana) {
  let diaSemanaTxt;
  switch (diaSemana) {
    case 0:
      diaSemanaTxt = "Domingo";
      return diaSemanaTxt;
    case 1:
      diaSemanaTxt = "Segunda-Feira";
      return diaSemanaTxt;
    case 2:
      diaSemanaTxt = "Terça-Feira";
      return diaSemanaTxt;
    case 3:
      diaSemanaTxt = "Quarta-Feira";
      return diaSemanaTxt;
    case 4:
      diaSemanaTxt = "Quinta-Feira";
      return diaSemanaTxt;
    case 5:
      diaSemanaTxt = "Sexta-Feira";
      return diaSemanaTxt;
    case 6:
      diaSemanaTxt = "Sábado";
      return diaSemanaTxt;
    default:
      diaSemanaTxt = "";
      return diaSemanaTxt;
  }
}

console.log(getDiaSemana(diaSemana))
