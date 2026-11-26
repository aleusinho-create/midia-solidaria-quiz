function animateScore(target) {
  let current = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    scoreEl.textContent = Math.round(current);
  }, 30);
}