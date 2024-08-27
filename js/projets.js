document.addEventListener('DOMContentLoaded', function () {
    const initialCardsToShow = 3; // Cuántas cartas mostrar inicialmente
    const cards = document.querySelectorAll('.projet-card');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const viewLessBtn = document.getElementById('viewLessBtn');

    // Ocultar las cartas que superan el límite inicial
    if (cards.length > initialCardsToShow) {
        for (let i = initialCardsToShow + 1; i < cards.length; i++) {
            cards[i].classList.add('hidden');
        }
    } else {
        viewMoreBtn.style.display = 'none'; // Si no hay suficientes cartas, ocultar el botón "Ver más"
    }

    // Mostrar más cartas al hacer clic en "Ver más"
    viewMoreBtn.addEventListener('click', function () {
        for (let i = initialCardsToShow; i < cards.length; i++) {
            cards[i].classList.remove('hidden');
        }
        viewMoreBtn.style.display = 'none';
        viewLessBtn.style.display = 'inline-block';
    });

    // Ocultar cartas al hacer clic en "Volver a las cartas principales"
    viewLessBtn.addEventListener('click', function () {
        for (let i = initialCardsToShow + 1; i < cards.length; i++) {
            cards[i].classList.add('hidden');
        }
        viewLessBtn.style.display = 'none';
        viewMoreBtn.style.display = 'inline-block';
    });
});