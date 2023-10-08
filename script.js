const navItems = [
    { text: 'Home', link: '#' },
    { text: 'Services', link: '#' },
    { text: 'Projects', link: '#' },
    { text: 'Blog', link: '#' },
    { text: 'About Me', link: '#' },
  ];
  
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
  
  document.addEventListener('DOMContentLoaded', addNavItems);

  

document.addEventListener('DOMContentLoaded', function () {
    alert("you can use arrow keys to scrole :)")

    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                window.scrollBy(0, -50);
                break;
            case 'ArrowDown':
                window.scrollBy(0, 50);
                break;
        }
    });
});
