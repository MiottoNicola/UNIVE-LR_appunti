var N = 5;
var score = 0;
var symbols = { "grass.png": 0, "head.png": 100, "rear.png": -200 };

function createMole() {
  let mole = document.createElement("img");
  mole.setAttribute("src", Object.keys(symbols)[0]);
  mole.addEventListener("click", function () {
    display.childNodes[0].textContent = score += symbols[mole.getAttribute("src")];
    if (score < 0) document.body.innerHTML = "hai perso !";
    if (score >= 1000) document.body.innerHTML = "hai vinto !";
  });
  setInterval(function () {
    mole.setAttribute(
      "src",
      Object.keys(symbols)[Math.floor(Math.random() * 3)]
    );
  }, 1000);
  document.body.appendChild(mole);
}

for (var i = 0; i < N; i++) {
  for (var j = 0; j < N; j++) createMole();
  document.body.appendChild(document.createElement("br"));
}

let div = document.createElement("div");
let txt = document.createElement("div");
txt.textContent = "Il tuo punteggio: ";

var display = document.createElement("div");
display.textContent = score;

div.appendChild(txt);
div.appendChild(display);
document.body.appendChild(div);