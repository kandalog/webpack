import _ from 'lodash';
import { NiJou } from './utilities';

const component = () => {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())

console.log(NiJou(2));
console.log(NiJou(10));