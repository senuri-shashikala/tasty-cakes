// Filter cakes by category
function filterCakes(category) {
  document.querySelectorAll(".card").forEach(function (card) {
    const show = category === "all" || card.dataset.cat === category;
    card.classList.toggle("hide", !show);
  });
}

document.querySelectorAll(".chip").forEach(function (chip) {
  chip.addEventListener("click", function () {
    document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
    chip.classList.add("active");
    filterCakes(chip.dataset.cat);
  });
});

// Tell visitors if same day delivery is still open (before 4pm)
const hour = new Date().getHours();
document.getElementById("orderMsg").textContent =
  hour < 16 ? "Order now for same day delivery!" : "Orders after 4pm are delivered tomorrow.";
document.getElementById("year").textContent = new Date().getFullYear();
