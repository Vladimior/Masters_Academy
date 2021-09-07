// start coordinates
const pandemicStartMap = 'XX0X10010X000X010X0';

// Parametrs
const infected = 'red';
const uninfected = 'green';
const ocean = 'blue';
const classNameInfected = 'partRed';
const classNameUninfected = 'partGreen';
const classNameOcean = 'partBlue';
const pandemicStartId = 'pandemicStart';
const pandemicEndId = 'pandemicEnd';

// square creation function
function createDiv(className, color) {
  var div = document.createElement('div');
  div.className = className;
  div.style.backgroundColor = color;
  return div;
};

//map creation function
function сreateMap(coordinates, elementId) {
  for (var i = 0; i < coordinates.length; i++) {
    if (coordinates[i] === 'X') {
      document.getElementById(elementId).appendChild(createDiv(classNameOcean, ocean));
    }
    else if (coordinates[i] === '0') {
      document.getElementById(elementId).appendChild(createDiv(classNameUninfected, uninfected));
    }
    else if (coordinates[i] === '1') {
      document.getElementById(elementId).appendChild(createDiv(classNameInfected, infected));
    }
  }
};

// translate to array, find and replace, translate to string
let pandemicENDtMap = pandemicStartMap.split('X').map(end => end.includes('1') ? end.replace(/0/g, '1') : end).join('X');

// calculation of indicators
let total = pandemicENDtMap.replace(/X/g, '').length;
let infection = pandemicENDtMap.split('1').length - 1;
let percent = (infection * 100) / total;

// output of results
document.getElementById('total').innerHTML = 'Total: ' + total;
document.getElementById('infected').innerHTML = 'Infected: ' + infection;
document.getElementById('percentage').innerHTML = 'Percentage: ' + percent + '%';
document.getElementById('startCoordinat').innerHTML = pandemicStartMap;

// map creation
сreateMap(pandemicStartMap, pandemicStartId);
сreateMap(pandemicENDtMap, pandemicEndId);


