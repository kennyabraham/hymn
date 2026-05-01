(function() {
  const savedMode = localStorage.getItem('colorMode');
  const hour = new Date().getHours();

  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
  } else if (!savedMode && hour >= 6 && hour < 16) {
    document.body.classList.add('light-mode');
  }
})();

const toggle = document.getElementById('modeToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('colorMode',
      document.body.classList.contains('light-mode') ? 'light' : 'dark'
    );
  });
}