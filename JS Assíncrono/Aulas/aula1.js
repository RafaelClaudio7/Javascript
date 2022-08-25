// Promises
function randNum(min, max) {
  min *= 1000;
  max *= 1000;
  let random = Math.random() * (max - min) - min;

  return Math.floor(random);
}

function waitData (message, time) {
  return new Promise((resolve, reject) => {
    if(typeof(message) !== 'string'){
      reject('The message must be a string');
    }

    setTimeout(() => {
      resolve(message);
    }, time)
  });
}

waitData('First Request', randNum(1, 5))
    .then(resp => {
      console.log(resp);
      return waitData('Second Request', randNum(1,3));
    }).then(resp => {
      console.log(resp);
      return waitData('Third Request', randNum(1,12));
    }).then(resp => {
      console.log(resp);
    }).catch(e => console.log(e));