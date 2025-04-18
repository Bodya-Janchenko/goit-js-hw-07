function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorNameEl = document.querySelector(".color");
const colorButtonEl = document.querySelector(".change-color");

colorButtonEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorNameEl.textContent = color;
  document.body.style.backgroundColor = color;
});
