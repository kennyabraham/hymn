const title = document.querySelector('.next-up-title');
const image = document.querySelector('.next-up-image');

function activate() {
  image.classList.add('is-active');
}

function deactivate() {
  image.classList.remove('is-active');
}

title.addEventListener('mouseenter', activate);
title.addEventListener('mouseleave', deactivate);
image.addEventListener('mouseenter', activate);
image.addEventListener('mouseleave', deactivate);

const hour = new Date().getHours();

// Light mode between 6am (6) and 4pm (16)
if (hour >= 6 && hour < 16) {
  document.body.classList.add('light-mode');
}

// ─── MODE TOGGLE ───────────────────────────
const toggle = document.getElementById('modeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});