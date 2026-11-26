function shareWhatsApp() {
  const text = encodeURIComponent(`Descobri meu nível de solidariedade: ${level.name} (${state.score}/48). Faça o quiz você também!`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}