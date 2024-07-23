const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", animateCards);

function animateCards() {
  const cardBottom = (window.innerHeight / 4) * (125 / 25);
  cards.forEach((singleCard) => {
    const cardTop = singleCard.getBoundingClientRect().top;
    if (cardTop < cardBottom) {
      singleCard.classList.add("slidingIn");
    } else {
      singleCard.classList.remove("slidingIn");
    }
  });
}
