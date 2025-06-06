import "./styles.css";
import { cube } from './math.js';
import { greeting } from "./greetings.js";

console.log(greeting);


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }


function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
