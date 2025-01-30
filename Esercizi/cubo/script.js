let button = document.querySelector("button");
let title = document.querySelector("h1");
let numero = document.querySelector("input");

function cubo(value) {
  return value * value * value;
}

button.addEventListener("click", () => {
  title.innerHTML = cubo(numero.value);
});
