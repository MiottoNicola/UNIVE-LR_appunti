let Persona = {
    nome: "nome",
    cognome: "none",
    eta: 0,

    saluta(){
        console.log("Ciao, sono " + this.nome + " " + this.cognome + " e ho " + this.eta + " anni");
    }
}

Persona.saluta();
let p1 = Object.create(Persona);
//let p2 = new Persona();       NO PERCHè MANCA IL COSTRUTTORE
p1.saluta();

function Range(min, max){
   this.min = min;
    this.max = max;
}
Range.prototype.min = function(a,b) { this.min; };
Range.prototype.max = function() { this.max; };
Range.prototype.random = function() { return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min; };
Range.prototype[Symbol.iterator] = function*() { for(let x = min; x<=this.max; x++) yield x;};

let r1 = new Range(1, 10);
console.log(r1.random());
console.log(r1.min);
console.log(r1.max);

r1.size = function() { return this.max - this.min; }
console.log(r1.size());
console.log(Range.prototype);


class Verdure{
    #nome
    #colore

    constructor(nome, colore){ 
        this.#nome = nome;
        this.#colore = colore;
    }

    get getNome() { return this.#nome; }
    get getColore() { return this.#colore; }

    set setNome(nome) { this.#nome = nome; }
    set setColore(colore) { this.#colore = colore; }

    toString() { return "Nome: " + this.#nome + " Colore: " + this.#colore; }
}
Verdure.prototype.bevi = function() { console.log("Bevo " + this.getNome); }

let v1 = new Verdure("Pomodoro", "Rosso");
console.log(v1.toString());
v1.bevi();
v1.mangia = function() { console.log("Mangio " + this.getNome); }
v1.mangia();