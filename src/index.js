import _ from 'lodash';
import printMe from './print.js';
import './main.scss';
import Runnign from './images/runnign.png';

let elementList = ['nav', 'header', 'main', 'div', 'p', 'footer', 'aside', 'section', 'article'];

function navit() {
let header = document.createElement(elementList[2]);
header.innerHTML = _-join(['Welcome to Taylor Sheckells Website'], ' ');
return header;
}

function component() {

    let element = document.createElement('div');
    let elementt = document.createElement('div');
    var btn = document.createElement('button');
// Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    elementt.innerHTML = _.join(['Hellooloooooooooooooo first', 'webpack'], ' ');
    elementt.classList.add('hello');

    var myIcon = new Image();
   myIcon.src = Runnign;

   element.appendChild(myIcon);
    return elementt;
  }


  function componen() {

  var ul = document.createElement('ul');

  document.getElementById('myItemList').appendChild(ul);

  elementList.forEach(function (listItem) {
      var li = document.createElement('li');
      ul.appendChild(li);
li.innerHTML += listItem;
  });

}


  function makeNavList() {
    // Establish the array which acts as a data source for the list
    var navItem =  ['About Taylor', 
    'General', 
    'Resume',
     'Past Portfolios',
      'Projects',
       'Projects',
        'AT&T',
         'Savage & Godfrey',
          'SmarterLifeStyle Network',
           'GenOne Media Group',
            'Contact'];

    // Make a container element for the list using nav
    var navContainer = document.createElement(elementList[0]);

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(navContainer);
    navContainer.classList.add('navigation');
    // Make the list
    var listElement = document.createElement('ul');

    // Add it to the page
    navContainer.appendChild(listElement);

    // Set up a loop that goes through the items in listItems one at a time
    var countNavItems = navItem.length;

    for (var i = 0; i < countNavItems; ++i) {
        // create an item for each one
        var listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = navItem[i];

        // Add the class to all nav items in the list
        listItem.classList.add('navItem');

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

// Usage
makeNavList();

  // document.body.appendChild(component());
  // document.body.appendChild(componen());
