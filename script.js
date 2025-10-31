const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if(card.classList.contains('expanded')){
      card.style.maxHeight = "60px"; // fecha
      card.classList.remove('expanded');
    } else {
      const contentHeight = card.scrollHeight; // altura real do conteúdo
      card.style.maxHeight = contentHeight + 120 + "px"; // adiciona 20px de folga
      card.classList.add('expanded');
    }
  });
});