import _ from 'lodash';
import printMe from './print.js';
import './main.scss';
import Runnign from './images/runnign.png';
import Data from './data/data.xml';
function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
// Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
   myIcon.src = Runnign;

   element.appendChild(myIcon);

   console.log(Data);

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);
    return element;
  }

  document.body.appendChild(component());