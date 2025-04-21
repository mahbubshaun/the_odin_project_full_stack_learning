import './style.css'; // Add this at the top
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Clear content function
function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Remove all child elements
  content.className = ''; // Reset any classes
}

// Initialize with home tab
loadHome();

// Tab switching logic
document.getElementById('home-btn').addEventListener('click', () => {
  clearContent();
  loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.getElementById('contact-btn').addEventListener('click', () => {
  clearContent();
  loadContact();
});