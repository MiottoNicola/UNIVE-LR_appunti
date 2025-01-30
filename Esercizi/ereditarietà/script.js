// function Persona(nome, cognome, età, genere, interessi) {
//   this.nome = nome;
//   this.cognome = cognome;
//   this.età = età;
//   this.genere = genere;
//   this.interessi = interessi;
//
//   saluta = function () {
//     console.log(`ciao sono: ${this.nome}`);
//   };
// }
//
// function Insegnante(nome, cognome, età, genere, interessi, materia) {
//   Persona.call(this, nome, cognome, età, genere, interessi);
//   this.materia = materia;
//
//   this.saluta = function () {
//     console.log(`Salve, sono il professor ${this.nome}`);
//   };
// }
//
// const prof1 = new Insegnante(
//   "Anna",
//   "ciano",
//   31,
//   "F",
//   ["surf", "kyte"],
//   "religione"
// );
// console.log(prof1);
// prof1.saluta();
//
//

class Persona {
  constructor(nome, cognome, età, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
    this.genere = genere;
    this.interessi = interessi;
  }

  saluta = function () {
    console.log(`ciao sono: ${this.nome}`);
  };
}

class Insegnante extends Persona {
  constructor(nome, cognome, età, genere, interessi, materia) {
    super(nome, cognome, età, genere, interessi);
    this.materia = materia;
  }

  riprendiAlunno(nomeAlunno) {
    console.log(`${nomeAlunno} non si mangia in classe, cazzo`);
  }

  get materia() {
    return this._materia;
  }

  set materia(nuovaMateria) {
    this._materia = nuovaMateria;
  }
}

const insegnante = new Insegnante(
  "Anna",
  "Blu",
  28,
  "F",
  ["surf", "kyte"],
  "matematica"
);
insegnante.riprendiAlunno("marco");
insegnante.saluta();
