const form = document.querySelector("form");
const nome = document.getElementById("fname");
const cognome = document.getElementById("fcognome");
const paragraph = document.querySelector("p");

form.onsubmit = function (e) {

  console.log(nome.value === "", cognome.value === "");
  if (nome.value === "" || cognome.value === "") {
    e.preventDefault();
    paragraph.textContent = "Insert all the values";
  }
};

nome.addEventListener("focus", function (e) {
  console.log(e.target.value);
});
