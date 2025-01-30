const btn = document.getElementById("date");
const alart = document.getElementById("alert");
const prova = document.getElementById("try");

btn.addEventListener("click", () => {
  let myDate;

  for (let i = 0; i < 10000000; ++i) {
    let date = new Date();
    myDate = date;
  }

  console.log(myDate);

  let pElem = document.createElement("p");
  pElem.textContent = "this is a new paragraph";
  document.body.appendChild(pElem);
});

alart.addEventListener("click", () => {
  alert("Attenzione");
});

prova.addEventListener("click", () => {
  alert("Ciuccimeo");

  let pElem = document.createElement("p");
  pElem.textContent = "ciuccimeo tutto";
  document.body.appendChild(pElem);
});
