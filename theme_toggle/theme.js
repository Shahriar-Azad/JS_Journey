const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: Change button icon/text

  
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '🌙 Toggle Theme';
  } else {
    toggleBtn.textContent = '🌞 Toggle Theme';
  }
});
