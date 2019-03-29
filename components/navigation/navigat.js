function componen() {
    let element = document.createElement('div');
    let elementt = document.createElement('div');
    var btn = document.createElement('button');
// Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    elementt.innerHTML = _.join(['Hellooloooooooooooooo', 'webpack'], ' ');
    elementt.classList.add('hello');

    var myIcon = new Image();
   myIcon.src = Runnign;

   element.appendChild(myIcon);
    return elementt;
  }

  document.body.appendChild(componen());