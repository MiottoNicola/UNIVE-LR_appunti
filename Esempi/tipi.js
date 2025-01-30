    let a = 10;
    let b = 20.58;
    let c = "hello";
    let oggetto = { nome: "Ciccio", cognome:"Ciuccio", eta: 30};
    let nullo = null;
    let indefinito;

    console.log("a:" + a);
    console.log("b:" + b);
    console.log("c:" + c);
    console.log("oggetto:" + oggetto + ", nome: "+oggetto.nome+", cognome: "+oggetto.cognome + ", età: "+oggetto.eta);
    console.log("nullo:" + nullo);
    console.log("indefinito:" + indefinito);

    console.log("a è di tipo: " + typeof a);
    console.log("b è di tipo: " + typeof b);
    console.log("c è di tipo: " + typeof c);
    console.log("oggetto è di tipo: " + typeof oggetto);
    console.log("nullo è di tipo: " + typeof nullo);
    console.log("indefinito è di tipo: " + typeof indefinito);

    a = "ciao";
    c = 10;
    console.log("a:" + a);
    console.log("c:" + c);
    console.log("a è di tipo: " + typeof a);
    console.log("c è di tipo: " + typeof c);


    const d = 100;
    console.log("d:" + d);
    //d = 200;
    //console.log("d:" + d);

    if(true){
        var e = 200;
        let f = 300;
    }
    console.log("e:" + e);
    //console.log("f:" + f);