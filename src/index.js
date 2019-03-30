import _ from 'lodash';
import printMe from './print.js';
import './main.scss';
import Runnign from './images/runnign.png';
import Logo from './images/Logo4.png';
import Background from './images/background';
import Kayak from './images/kayak.png';
import Running from './images/running.png';

let elementList = ['nav', 'header', 'main', 'div', 'p', 'footer', 'aside', 'section', 'article'];

  function makeNavList() {
    // Establish the array which acts as a data source for the list
    var navItem =   [
                    'About Taylor', 
                    'General', 
                    'Resume',
                    'Past Portfolios',
                    'Projects',
                    'Projects',
                    'AT&T',
                    'Savage & Godfrey',
                    'SmarterLifeStyle Network',
                    'GenOne Media Group',
                    'Contact'
                    ];

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

function Landing() {

    let div = document.createElement(elementList[3]);
 
// Lodash, currently included via a script, is required for this line to work
    div.innerHTML = 'Welcome To Taylor Sheckells Portfolio';
    div.classList.add('landing');
    var logo = new Image();
    logo.src = Logo;
    div.appendChild(logo);
    logo.classList.add('logo');
return div;
  }

  function AboutTaylor() {
     let divAbout = document.createElement(elementList[3]);

     divAbout.innerHTML = 'I am a local to North Carolina currently residing in the town of Wake Forest. During the summer I enjoy the outdoors with kayaking, running and doing any activity in the sun with my kids. I have a general love for building structures with any material I have, lego’s, wood paper or anything else that I have available. I enjoy traveling and learning about the history of the towns I visit and exploring local attractions. ';
     divAbout.classList.add('about');
     var shareImage = new Image();
     var shareImageTwo = new Image();
     shareImage.src = Kayak;
     shareImageTwo.src = Running;

     divAbout.appendChild(shareImage);
     divAbout.appendChild(shareImageTwo);
     
     return divAbout;
}

  function General() {

    let divGeneral = document.createElement(elementList[3]);
 
    divGeneral.innerHTML = 'Welcome To Taylor Sheckells Portfolio';
    divGeneral.classList.add('landing');
    var logo = new Image();
    logo.src = Logo;
    divGeneral.appendChild(logo);
    return divGeneral;
  }

  function content() {

    var siteContentContainer = document.createElement(elementList[2]);

    document.getElementsByTagName('body')[0].appendChild(siteContentContainer);

    siteContentContainer.classList.add('contentContainer');

    var landing =  document.body.appendChild(Landing());

    var about =  document.body.appendChild(AboutTaylor());

    siteContentContainer.appendChild(landing);
    siteContentContainer.appendChild(about);
  

  }

// Usage
makeNavList();
content();


