function saluta(nome){ 
    return "Ciao " + nome + "!";
}
console.log(saluta("Michele")); // Ciao Michele!

function sommaNumeri(...numeri){
    let somma = 0;
    for(let i=0; i<arguments.length; i++)
        somma += arguments[i];
    return somma;
}
console.log(sommaNumeri(1,2,3,4,5)); // 15

function creaContatore(){
    let contatore = 0;
    return function(){
        return contatore++;
    }
}
const contatore = creaContatore();
console.log(contatore()); // 0
console.log(contatore()); // 1
console.log(contatore()); // 2

let Luca = {
    nome: "luca",
    cognome: "rossi",
    saluta: function(){
        return "Ciao " + this.nomeCompleto + "!";
    },
    get nomeCompleto(){
        return this.nome + " " + this.cognome;
    },
    set nomeCompleto(value){
        let parti = value.split(" ");
        this.nome = parti[0];
        this.cognome = parti[1];
    }
}

console.log(Luca.nomeCompleto); // luca rossi
Luca.nomeCompleto = "Luca Bianchi";
console.log(Luca.nomeCompleto); // luca bianchi
console.log(Luca.saluta()); // Ciao Luca Bianchi!