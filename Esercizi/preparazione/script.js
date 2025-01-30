let button = document.querySelector("button");
let title = document.querySelector("h1");
let name = document.querySelector("input");

function saluta(name = "Marcello") {
  title.innerHTML = `ciao ${name}`;
}

button.addEventListener("click", () => {
  saluta(name.value);
});
