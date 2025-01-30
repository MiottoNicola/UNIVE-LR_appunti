let x = document.getElementById("bottone"); //ci ritorna un solo elemento, ha fiducia in noi che usiamo la best practice, ovvero dare un solo ID univoco ad un solo elemento

let y = document.querySelector("button");
let z = document.querySelector("#bottone");
let k = document.querySelector(".prova");

//querySelector restituisce un solo elemento... posso usarlo come tagName usando il nome del tag, utilizzando il cancelletto davanti fa riferimento ad un ID, con il punto fa riferimento ad una classe.

let w = document.querySelectorAll(".prova");
//permette di prendere tutti gli elementi di un certo tipo, in questo caso tutti quelli con classe prova. Li ritorna in un'array.

let j = document.getElementsByClassName("prova");
//lo stesso vale per questo.

const div = document.querySelector("div");
const paragrafo = document.createElement("p");
paragrafo.textContent = "ciao cicci";
div.appendChild(paragrafo);

const extraTesto = document.createTextNode("oni di merda");
paragrafo.appendChild(extraTesto);

// document.body.appendChild(paragrafo);
//

// paragrafo.removeChild(extraTesto);

paragrafo.style.color = "red";
paragrafo.style.backgroundColor = "blue";
paragrafo.style.padding = "10px";
paragrafo.style.textAlign = "center";

x.addEventListener("click", () => alert("ciao"));



let input = document.querySelector("form").querySelector("input");
console.log(input);

let form = document.querySelector("form");
form.addEventListener("submit", (e) =>{
    console.log("submit"+input.value);
    e.preventDefault();
});