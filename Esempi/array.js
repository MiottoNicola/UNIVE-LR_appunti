let nomi = ["Mario", "Luigi", "Pippo", "Pluto"];

console.log(nomi);

nomi.push("Paperino");
console.log("Dopo push lunghezza: "+nomi.length);
console.log(nomi);

nomi.pop();
console.log("Dopo pop lunghezza: "+nomi.length);
console.log(nomi);

nomi.shift();
console.log("Dopo shift lunghezza: "+nomi.length);
console.log(nomi);

nomi.unshift("Topolino");
console.log("Dopo unshift lunghezza: "+nomi.length);
console.log(nomi);

nomi.splice(1, 2);
console.log("Dopo splice lunghezza: "+nomi.length);
console.log(nomi);

nomi.splice(1, 0, "Ciccio", "Polenta");
console.log("Dopo splice lunghezza: "+nomi.length);
console.log(nomi);

let newNomi = nomi.map(n => n.toUpperCase());
console.log(newNomi);

let nomiFiltrati = nomi.filter(n => n.length > 5);
console.log(nomiFiltrati);

let nomiRidotti = nomi.reduce((acc, n) => acc + n[0], "");
console.log(nomiRidotti);

let numeri1 = [1, 2, 3, 4, 5];
let numeri2 = [6, 7, 8, 9, 10];

let somma = numeri1.concat(numeri2);
let somma2 = [...numeri1, ...numeri2];
console.log(somma);
console.log(somma2);