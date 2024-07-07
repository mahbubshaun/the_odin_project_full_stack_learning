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

