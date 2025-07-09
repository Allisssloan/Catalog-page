function filterDresses(color) {
    const cards = document.querySelectorAll('.dress-card');
    cards.forEach(card => {
      if (color === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(color) ? 'block' : 'none';
      }
    });
  }

  