import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join([
    'This is',
    'personal page',
    'to studying',
    'parcel bundler!',
  ], ' ');

  return element;
}

document.body.appendChild(component());
