const hamburgerBtn = document.querySelector(".hamburger");
const menuToggle = document.querySelector(".mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  menuToggle.classList.toggle("is-active");
});
