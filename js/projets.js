document.addEventListener("DOMContentLoaded", function () {
  const initialCardsToShow = 3;
  const cards = document.querySelectorAll(".projet-card");
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const viewLessBtn = document.getElementById("viewLessBtn");

  // Hide cards beyond the initial limit
  // Start from `initialCardsToShow` to hide the rest
  if (cards.length > initialCardsToShow) {
    for (let i = initialCardsToShow; i < cards.length; i++) {
      cards[i].classList.add("hidden");
    }
    viewMoreBtn.style.display = "inline-block"; // Ensure button is visible if there are more cards
  } else {
    viewMoreBtn.style.display = "none"; // Hide if no more cards to show
  }

  viewMoreBtn.addEventListener("click", function () {
    for (let i = initialCardsToShow; i < cards.length; i++) {
      cards[i].classList.remove("hidden");
    }
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline-block";
  });

  viewLessBtn.addEventListener("click", function () {
    for (let i = initialCardsToShow; i < cards.length; i++) {
      cards[i].classList.add("hidden");
    }
    viewLessBtn.style.display = "none";
    viewMoreBtn.style.display = "inline-block";
  });
});
