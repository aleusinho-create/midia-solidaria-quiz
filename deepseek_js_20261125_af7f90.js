document.addEventListener('keydown', (e) => {
  if (e.key >= '1' && e.key <= '4') {
    const options = document.querySelectorAll('.option');
    if (options[e.key - 1] && !options[e.key-1].disabled) {
      options[e.key - 1].click();
    }
  }
});