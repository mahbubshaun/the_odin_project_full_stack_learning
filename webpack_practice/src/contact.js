export default function loadContact() {
    const content = document.getElementById('content');
  
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    
    const phone = document.createElement('p');
    phone.textContent = '📞 555-1234-5678';
    
    const address = document.createElement('p');
    address.textContent = '🏠 123 Burger Street, Food City';
  
    content.append(heading, phone, address);
  }