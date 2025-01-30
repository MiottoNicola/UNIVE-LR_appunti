let libro = {
    titolo : "Il signore degli anelli",
    autore: "J.R.R. Tolkien",
    anno: 1954,

    info: function(){ return this.titolo + " scritto da " + this.autore + " nel " + this.anno; }
}

console.log("libro.titolo: " + libro.titolo);
console.log("libro.autore: " + libro.autore);
console.log("libro.anno: " + libro.anno);
console.log("libro.info: " + libro.info());

console.log("libro[\"titolo\"]: " + libro["titolo"]);
console.log("libro[\"autore\"]: " + libro["autore"]);
console.log("libro[\"anno\"]: " + libro["anno"]);
console.log("libro[\"info\"]: " + libro["info"]());

libro.genere = "Fantasy";
libro.anno = 1955;
delete libro.autore;
console.log("libro.titolo: " + libro.titolo);
console.log("libro.autore: " + libro.autore);
console.log("libro.anno: " + libro.anno);
console.log("libro.genere: " + libro.genere);
console.log("libro.info: " + libro.info());


for(let k in libro)
    console.log(k + ": " + libro[k]);