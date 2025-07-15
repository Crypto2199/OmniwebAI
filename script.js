
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});
