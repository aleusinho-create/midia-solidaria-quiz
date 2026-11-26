function renderQuestion() {
  const q = questions[state.current];
  // Update UI
  ...
  // Animate in
  questionContainer.classList.remove('slide-in');
  void questionContainer.offsetWidth;
  questionContainer.classList.add('slide-in');
}