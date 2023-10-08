// Sample data representing navigation items
const navItems = [
    { text: 'Home', link: '#' },
    { text: 'Services', link: '#' },
    { text: 'Projects', link: '#' },
    { text: 'Blog', link: '#' },
    { text: 'About Me', link: '#' },
  ];
  
  // Function to dynamically create and add <li> elements to the navigation list
  function addNavItems() {
    const navList = document.querySelector('nav ul');
  
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      
      a.textContent = item.text;
      a.href = item.link;
  
      li.appendChild(a);
      navList.appendChild(li);
    });
  }
  
  // Call the function to add navigation items when the page loads
  document.addEventListener('DOMContentLoaded', addNavItems);
  