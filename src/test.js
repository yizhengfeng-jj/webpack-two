import _ from 'lodash';
import { getName, getAge } from './util/getInfo';

import printMe from './print.js';
setTimeout(() => {}, 1000);
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML =
    'Click me and check the console!!!!23344433888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555555555555555555555555555555';
  btn.onclick = printMe;

  element.appendChild(btn);
  getName();
  getAge();
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}
