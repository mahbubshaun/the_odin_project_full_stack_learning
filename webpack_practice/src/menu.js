export default function loadMenu() {
    const content = document.getElementById('content');
    content.className = 'menu-grid';
  
    const menuItems = [
      { name: 'Classic Burger', price: '$12' },
      { name: 'Cheese Burger', price: '$14' },
      { name: 'Bacon Burger', price: '$16' },
    ];
  
    // Create new elements array
    const menuElements = menuItems.map(item => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
      return div;
    });
  
    // Replace content
    content.append(...menuElements);
  }