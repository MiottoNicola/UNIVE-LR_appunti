let BaseBankAccount = {
    amount: 0,
    owner: "none",
    add: function(incr){
        if(incr>0)
            this.amount += incr;
    }
}

let BankAccount1 = function(amount, owner){
    if(amount)
        this.amount = amount;
    if(owner)
        this.owner = owner;
}

let BankAccount2 = function(accountConfig){
    if(accountConfig.amount)
        this.amount = accountConfig.amount;
    if(accountConfig.owner)
        this.owner = accountConfig.owner;
}

let BankAccount3 = function(firstparam, owner){
    if(typeof firstparam == "object"){
        if(firstparam.amount)
            this.amount = firstparam.amount
        if(firstparam.owner)
            this.owner = firstparam.owner
    }else{
        if(firstparam)
            this.amount = firstparam;
        if(owner)
            this.owner = owner
    }
}

BankAccount1.prototype = BaseBankAccount;
BankAccount2.prototype = BaseBankAccount;
BankAccount3.prototype = BaseBankAccount;
//BanckAccunt.prototype = { amount: 0, owner: "none" };

let AlternateNameForBanckAccount = BankAccount1;
let myAccount1 = new BankAccount1(100, "Pippo");
let myAccount2 = new BankAccount2({owner: "Pluto", amount: 50});
let myAccount3 = new BankAccount3({owner: "Paperino"});
let myAccount4 = new BankAccount3({amount: 20});
let myAccount5 = new BankAccount3(100, "Sorse");
let myAccount6 = new BankAccount3({owner: "Elefante", amount: 30});

console.log(AlternateNameForBanckAccount);
console.log(BankAccount1);
console.log(BankAccount2);
console.log(BankAccount3);

console.log(myAccount1);
console.log(myAccount2);
console.log(myAccount3);
console.log(myAccount4);
console.log(myAccount5);
console.log(myAccount6);