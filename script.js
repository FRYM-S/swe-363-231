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

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('signatureCanvas');
  const context = canvas.getContext('2d');
  const clearButton = document.getElementById('clearSignature');
  const signatureInput = document.getElementById('signatureInput');

  let isDrawing = false;

  canvas.addEventListener('mousedown', () => {
      isDrawing = true;
  });

  canvas.addEventListener('mouseup', () => {
      isDrawing = false;
      saveSignature();
  });

  canvas.addEventListener('mousemove', draw);

  clearButton.addEventListener('click', clearSignature);

  function draw(event) {
      if (!isDrawing) return;

      context.lineWidth = 2;
      context.lineCap = 'round';
      context.strokeStyle = '#000';

      context.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
  }

  function clearSignature() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      signatureInput.value = ''; 
  }
});