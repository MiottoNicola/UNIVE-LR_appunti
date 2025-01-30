class Auto{
    #marca;
    #modello;

    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }

    get marca(){ return this.marca; }
    get modello(){ return this.#modello; }

    set marca(marca){ this.#marca = marca; }
    set modello(modello){ this.#modello = modello; }
    set aggiornaAuto(valori){
        [this.marca, this.modello] = valori.split(" ");
    }

    descrivi(){ return `Auto ${this.#marca} ${this.#modello}`; }

    static isBetter(){ return "Auto is better"; }
}

class AutoElettrica extends Auto{
    #autonomia;

    constructor(marca, modello, autonomia){
        super(marca, modello);
        this.autonomia = autonomia;
    }

    get autonomia(){ return this.#autonomia; }
    set autonomia(autonomia){ this.#autonomia = autonomia; }
    set aggiornaAuto(valori){
        [this.marca, this.modello, this.autonomia] = valori.split(" ");
    }

    descrivi(){ return `${super.descrivi()} con autonomia di ${this.#autonomia} km`; }
}




let auto1 = new Auto("Fiat", "Panda");
let auto2 = new Auto("Ford", "Fiesta");
let auto3 = new AutoElettrica("Tesla", "Model 3", 500);

console.log(auto1.descrivi());
console.log(auto2.descrivi());
console.log(auto3.descrivi());

auto1.aggiornaAuto = "Fiat 500";
auto2.aggiornaAuto = "Ford Focus";
auto3.aggiornaAuto = "Tesla Model S 600";
console.log(auto1.descrivi());
console.log(auto2.descrivi());
console.log(auto3.descrivi());

console.log(Auto.isBetter());