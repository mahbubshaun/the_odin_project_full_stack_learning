const container = document.querySelector('.container');

const content = document.createElement("div");

content.classList.add('content');

content.textContent = "This is the glorious text-content!";

container.appendChild(content);

content.setAttribute('style', 'color: white; background-color: black;');

console.dir(content);

const paragraph = document.createElement('p');
paragraph.textContent = 'Hey I’m red!';
paragraph.setAttribute('style', 'color: red;');
container.appendChild(paragraph);

const header = document.createElement('h3');
header.textContent = 'I’m a blue h3!';
header.setAttribute('style', 'color: blue;');
container.appendChild(header);

const div = document.createElement('div');
div.setAttribute('style', 'background-color:pink; border: 1px solid black;')

// container.appendChild(div);

const headerInsideDiv = document.createElement('h3');
headerInsideDiv.textContent = 'I’m in a div';

const paragraphInsideDiv = document.createElement('p');
paragraphInsideDiv.textContent = 'ME TOO!';

div.appendChild(headerInsideDiv);
div.appendChild(paragraphInsideDiv);

container.appendChild(div);


// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");


// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
    console.log(e);
  });

  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  