import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Test'], ' ');

  return element;
}

document.body.appendChild(component());
