import _ from 'lodash';
import './style.scss';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join([
    'This is',
    'personal page',
    'to studying',
    'parcel bundler!',
  ], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
