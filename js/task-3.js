const inputEl = document.querySelector("#name-input");
const personEl = document.querySelector("#name-output");

const addPerson = (event) =>
  (personEl.textContent = event.currentTarget.value.trim());

inputEl.addEventListener("input", addPerson);
