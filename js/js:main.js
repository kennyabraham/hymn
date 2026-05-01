const hour = new Date().getHours();

const savedMode = localStorage.getItem('colorMode');

if (savedMode) {
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
  }
} else {
  if (hour >= 6 && hour < 16) {
    document.body.classList.add('light-mode');
  }
}

const toggle = document.getElementById('modeToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('colorMode', 'light');
    } else {
      localStorage.setItem('colorMode', 'dark');
    }
  });
}