const CIRCUMFERENCE = 2 * Math.PI * 85; // ≈ 534.07
gaugeFill.style.strokeDasharray = CIRCUMFERENCE;
gaugeFill.style.strokeDashoffset = CIRCUMFERENCE;

// After a tick:
requestAnimationFrame(() => {
  const percent = (score - 12) / (48 - 12);
  const offset = CIRCUMFERENCE * (1 - percent);
  gaugeFill.style.strokeDashoffset = offset;
});