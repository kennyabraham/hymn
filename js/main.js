(function() {
  const saved = localStorage.getItem('colorMode');
  const hour = new Date().getHours();
  if (saved === 'light' || (!saved && hour >= 6 && hour < 16)) {
    document.documentElement.classList.add('light-mode');
  }
})();

const toggle = document.getElementById('modeToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('colorMode',
      document.documentElement.classList.contains('light-mode') ? 'light' : 'dark'
    );
  });
}