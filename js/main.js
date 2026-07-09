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
// ─── NEXT UP IMAGE ANIMATION ─────────────
const nextUpImage = document.querySelector('.next-up-image');
const nextUpWrapper = document.querySelector('.next-up-image-wrapper');

if (nextUpWrapper) {
  nextUpWrapper.addEventListener('mouseenter', () => {
    nextUpImage.classList.add('is-active');
  });

  nextUpWrapper.addEventListener('mouseleave', () => {
    nextUpImage.classList.remove('is-active');
  });
}

// ─── VIDEO MUTE TOGGLE ────────────────────
const muteToggle = document.getElementById('muteToggle');
const vimeoPlayer = document.getElementById('vimeo-player');

if (muteToggle && vimeoPlayer) {
  let isMuted = true;
  const player = new Vimeo.Player(vimeoPlayer);

  muteToggle.addEventListener('click', () => {
    if (isMuted) {
      player.setVolume(1);
      muteToggle.classList.add('is-unmuted');
    } else {
      player.setVolume(0);
      muteToggle.classList.remove('is-unmuted');
    }
    isMuted = !isMuted;
  });
}