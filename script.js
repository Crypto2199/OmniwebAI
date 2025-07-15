// الوضع الليلي
const toggleDark = document.getElementById("toggleDark");
toggleDark.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark") ? "on" : "off");
};
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
}
// البحث
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  document.querySelectorAll(".tool-card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});
// الفئات
const filterButtons = document.querySelectorAll(".category-filters button");
filterButtons.forEach(btn => {
  btn.onclick = () => {
    const category = btn.getAttribute("data-category");
    document.querySelectorAll(".tool-card").forEach(card => {
      card.style.display = (category === "all" || card.getAttribute("data-category") === category) ? "block" : "none";
    });
  };
});
// الترجمة
const langSelect = document.getElementById("langSelect");
const elementsMap = {
  subtitle: "subtitle",
  searchInput: "search",
  btnAll: "all",
  btnChat: "chat",
  btnImage: "image",
  btnWriting: "writing",
  btnVideo: "video",
  btnAudio: "audio",
  btnSearch: "search_category"
};
function applyTranslations(lang) {
  fetch("lang.json")
    .then(res => res.json())
    .then(data => {
      const t = data[lang];
      if (!t) return;
      for (let id in elementsMap) {
        const key = elementsMap[id];
        const el = document.getElementById(id);
        if (el.tagName === "INPUT") {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
      localStorage.setItem("lang", lang);
    });
}
langSelect.addEventListener("change", () => {
  applyTranslations(langSelect.value);
});
const savedLang = localStorage.getItem("lang") || "ar";
langSelect.value = savedLang;
applyTranslations(savedLang);
