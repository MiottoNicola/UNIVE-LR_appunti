let baseBankAccount = {
	amount: 0,
	owner: "none",
	add: function(incr){
		this.amount = this.amount + incr;
	},
	join: function(otherAccount){
		if(!(otherAccount instanceof BankAccount))
			throw "Wrong parameter type";
		if(this.owner!=otherAccount.owner)
			throw "Cannot join accounts with different owners";
		this.add(otherAccount.amount);
	}
};

let BankAccount = function( amount, owner ){
	if(typeof amount==="object")
	   [amount, owner] = [amount.amount, amount.owner];
   
	if(amount){
		if(typeof amount!=="number")
			throw "Wrong parameter, expected Number";
		this.amount = amount;
	}
	
	if(owner)
		this.owner = owner;
};
BankAccount.prototype = baseBankAccount;

//let BankAccountDefault = function(){
//};
//BankAccountDefault.prototype = baseBankAccount;

try{
	let ba1 = new BankAccount({owner:"Pippo", amount: 110});
	ba1.add(100);
	ba1.add(200); 
}catch(e){
	console.log(e);
}

//let check1 = ( ba1 instanceof BankAccountDefault );

let ba2 = new BankAccount();
ba2.add(100);
ba2.add(200); 

let check2 = ( ba2 instanceof BankAccount );

