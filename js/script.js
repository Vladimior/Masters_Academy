// start coordinates
const pandemicStartMap = "XX0X10010X000X010X0";

// square creation function
function createDiv(className, color){
    var div = document.createElement('div');
    div.className    = className;
    div.style.width  = '40px';
    div.style.height = '40px';
    div.style.border = '1px solid grey';
    div.style.marginLeft = '4px';
    div.style.backgroundColor = color;
    return div;
  };

  // start map creation function
function CreateMap(coordinates){
    for (var i = 0; i < coordinates.length; i++) {
        if (coordinates[i] == 'X'){
          document.getElementById("pandemicStart").appendChild(createDiv('partBlue', 'blue'));
          
        }
        else if (coordinates[i] == '0'){
            document.getElementById("pandemicStart").appendChild(createDiv('partGreen', 'green'));
        }
        else if (coordinates[i] == '1'){
            document.getElementById("pandemicStart").appendChild(createDiv('partRed', 'red'));
        }
      }
};

// final map creation function
function CreateMapEnd(coordinates){
  for (var i = 0; i < coordinates.length; i++) {
      if (coordinates[i] == 'X'){
        document.getElementById("pandemicEnd").appendChild(createDiv('partBlue', 'blue'));
        
      }
      else if (coordinates[i] == '0'){
          document.getElementById("pandemicEnd").appendChild(createDiv('partGreen', 'green'));
      }
      else if (coordinates[i] == '1'){
          document.getElementById("pandemicEnd").appendChild(createDiv('partRed', 'red'));
      }
    }
};

// translate to array, find and replace, translate to string
let pandemicENDtMap = pandemicStartMap.split('X').map(end => end.includes('1') ? end.replace(/0/g, '1') : end).join('X');

// calculation of indicators

var total =  pandemicENDtMap.replace(/X/g, '').length;
var infection = pandemicENDtMap.split('1').length - 1;
var percent = (infection * 100) / total;


document.getElementById("total").innerHTML = "Total: " + total;
document.getElementById("infected").innerHTML = "Infected: " + infection ;
document.getElementById("percentage").innerHTML = "Percentage: " + percent +'%'

CreateMap(pandemicStartMap)
CreateMapEnd(pandemicENDtMap)


