document.getElementById("toggleDark").onclick = () => {
  document.body.classList.toggle("dark");
};

document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  document.querySelectorAll(".tool-card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});

document.querySelectorAll(".category-filters button").forEach(btn => {
  btn.onclick = () => {
    const cat = btn.getAttribute("data-category");
    document.querySelectorAll(".tool-card").forEach(card => {
      card.style.display = (cat === "all" || card.getAttribute("data-category") === cat) ? "block" : "none";
    });
  };
});

document.getElementById("langSelect").addEventListener("change", function() {
  const lang = this.value;
  const text = {
    ar: "دليلك الشامل لأفضل أدوات الذكاء الاصطناعي",
    en: "Your ultimate guide to the best AI tools",
    fr: "Votre guide ultime des meilleurs outils IA",
    zh: "最佳AI工具终极指南"
  };
  document.getElementById("subtitle").textContent = text[lang];
});
