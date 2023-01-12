// run `node index.js` in the terminal
const fs = require('fs');
const file = './empty';

fs.readFile(file, 'utf8', (error, data) => {
  //checking if file is missing
  if (!file) {
    return console.log('fle is missing');
  }
  //checking if folder is empty
  if (fs.readdirSync(file).length === 0) {
    return console.log('the folder you selected is a Empty folder');
  }
  //checking if any error
  if (error) {
    return console.log('error', error);
  }
  //validity of a json file
  if (!error && file) {
    var json = JSON.parse(data);
    if (typeof json === 'object') {
      console.log('its a valid json', json);
    } else {
      console.log('not a valid json');
    }
  }
});
