const hamburgerBtn = document.querySelector(".hamburger");
const menuToggle = document.querySelector(".mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  menuToggle.classList.toggle("is-active");
});

const startingMinutes = 1;
let time = startingMinutes * 60;

const countDownEl = document.getElementById("countDown");

const myInterval = setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 1 ? "00" : seconds;

  countDownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;

  const timeDown = minutes + seconds;

  if (timeDown < 0) {
    clearInterval(myInterval);
    countDownEl.innerHTML = "AUCTION IS ALREADY DONE";
  }
}
