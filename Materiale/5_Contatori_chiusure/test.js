let CreateCounter = function(){
	
	let base = 0;
	
	let c = function(){
		let newVal = base;
		newVal += 1;
		base = newVal;
		return newVal;
	}
	
	return c;
}

let c1 = CreateCounter();
let c2 = CreateCounter();

let v = c1();
v = c1();
v = c2();
v = c1();

function createCounterCollection(size){

    let total = 0;    

    function createCounter(){
        let base = 0;
        return function(){            
            total++;
            base++;
            return base;
        }
    }

    let collection = { getTotal: function(){ return total; } };

    while(size-->0)
       collection["count_"+size] = createCounter();

    return collection;
}

let cc1 = createCounterCollection(3);
let cc2 = createCounterCollection(10);

cc1.count_3();
cc1.count_4();
cc1.count_3();