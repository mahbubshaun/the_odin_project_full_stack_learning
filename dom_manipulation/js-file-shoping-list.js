const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function responseToClick(e){

    console.log(e);

}

// button.addEventListener('click', responseToClick(e));



button.addEventListener("click", function (e) {
    console.log(e);
    let currentInputValue = input.value;
    console.log(currentInputValue);
    input.value = '';
    const list = document.createElement('li')
const span = document.createElement('span');
const button = document.createElement('button');

list.appendChild(span);
list.appendChild(button);

span.textContent = currentInputValue;

button.textContent =  'Delete';

ul.appendChild(list);

button.addEventListener('click', function (e){
 ul.removeChild(list);
});

input.focus();


  });


  addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
});

addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
});

addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
});

addEventListener('unload', (event) => {
    // send analytic data
});

let btn = document.querySelector('#btn');

// disable context menu when right-mouse clicked
btn.addEventListener('contextmenu', (e) => {
e.preventDefault();
});

// show the mouse event message
btn.addEventListener('mouseup', (e) => {
let msg = document.querySelector('#message');
switch (e.button) {
case 0:
    msg.textContent = 'Left mouse button clicked.';
    break;
case 1:
    msg.textContent = 'Middle mouse button clicked.';
    break;
case 2:
    msg.textContent = 'Right mouse button clicked.';
    break;
default:
    msg.textContent = `Unknown mouse button code: ${event.button}`;
}
});


let msg = document.querySelector('#message');

msg.addEventListener("keydown", (event) => {
    // handle keydown
});

msg.addEventListener("keypress", (event) => {
    // handle keypress
});

msg.addEventListener("keyup", (event) => {
    // handle keyup
});


let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});


let btnEvent = document.querySelector('.btn');

btnEvent.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btnEvent.dispatchEvent(clickEvent);
