function goBack() {
  if (state.current === 0) {
    showScreen('intro');
    return;
  }
  state.current--;
  state.answers[state.current] = null;
  renderQuestion();
}