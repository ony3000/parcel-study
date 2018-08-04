import _ from 'lodash';
import '@mdi/font/scss/materialdesignicons.scss';
import Profile from './assets/profile.png';
import './assets/style.scss';

function component() {
    var element = document.createElement('span');

    element.innerHTML = _.join([
        'This is',
        'personal page',
        'to studying',
        'parcel bundler!',
    ], ' ');
    element.classList.add('hello');

    var myProfile = new Image();

    myProfile.src = Profile;
    element.appendChild(myProfile);

    return element;
}

document.body.appendChild(component());
