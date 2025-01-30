const persona = {
  nome: "Luca",
  cognome: "rossi",
  sesso: "M",
  interessi: ["snowboard", "basket", "picnic al parco"],
  indirizzo: {
    via: "Calle del fumo",
    cap: "20123",
    provincia: "Milano",
  },
  età: 25,
  saluta: function () {
    console.log(
      `ciao sono ${persona.nome} ${persona.cognome} e ho ${persona.età} anni`
    );
  },
};

persona.nome = "Paolo";

console.log(persona.nome);
console.log(persona["nome"]);
console.log(persona.indirizzo.provincia);
console.log(persona["indirizzo"]["provincia"]);

console.log(persona["interessi"][2]);
persona.saluta();
persona["saluta"];
