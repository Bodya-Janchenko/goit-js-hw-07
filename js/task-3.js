const inputEl = document.querySelector("#name-input");
const personEl = document.querySelector("#name-output");

const addPerson = (event) => {
  const name = event.currentTarget.value.trim();
  personEl.textContent = name === "" ? "Anonymous" : name;
};

inputEl.addEventListener("input", addPerson);
