import burger from './assets/images/burger.jpg';
export default function loadHome() {
    const content = document.getElementById('content');
    content.className = 'home-container';
  
    // Create fresh elements each time
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Burger Palace!';
  
    const image = document.createElement('img');
    image.src = burger;
    image.alt = 'Restaurant interior';
  
    const text = document.createElement('p');
    text.textContent = 'Serving quality since 1998!';
  
    // Append new elements
    content.append(heading, image, text);
  }