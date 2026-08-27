// Team Task Manager Core Logic
console.log("Team Task Manager initialized successfully!");

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.task-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.style.borderColor = 'var(--accent-purple)';
      setTimeout(() => {
        card.style.borderColor = '';
      }, 500);
    });
  });
});
