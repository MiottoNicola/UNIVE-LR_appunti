function Persona(nome, cognome, età, genere, interessi) {
  this.nome = nome;
  this.cognome = cognome;
  this.età = età;
  this.genere = genere;
  this.interessi = interessi;

  this.bio = function () {
    console.log(
      `ciao sono ${this.nome} ${this.cognome} e ho ${
        this.età
      } anni, sono appassionato di ${this.interessi.join(", ")}`
    );
  };

  this.saluta = function () {
    console.log("ciao cicci");
  };
}

const persona1 = new Persona("marco", "rossi", 25, "maschio", [
  "snowboard",
  "picNic al parco",
  "curare i malati",
]);

persona1.bio();
console.log(persona1);
