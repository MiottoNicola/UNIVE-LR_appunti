function Auto(marca, modello){
    this.marca = marca;
    this.modello = modello;
}

Auto.prototype.descrivi = function(){
    return `Auto ${this.marca} ${this.modello}`;
}

let auto1 = new Auto("Fiat", "Panda");
let auto2 = new Auto("Ford", "Fiesta");

console.log(auto1.descrivi());
console.log(auto2.descrivi());

function AutoElettrica(marca, modello, autonomia){
    Auto.call(this, marca, modello);
    this.autonomia = autonomia;
}
let auto3 = new AutoElettrica("Tesla", "Model 3", 500);
console.log(auto3);


const pototipoBase = {
    descrivi(){
        return `${this.marca} ${this.modello}`;
    }
}

const auto4 = Object.create(pototipoBase);
auto4.marca = "Tesla";
auto4.modello = "Model 3";
console.log(auto4.descrivi());