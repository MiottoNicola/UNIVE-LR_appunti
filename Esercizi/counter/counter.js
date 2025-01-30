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

    // Create a new object 
    // with one property that is a function object 
    let collection = { getTotal: function(){return total;} };

    // Add to the collection object properties 
    // that are function objects
    while(size-->0) 
        // Until size-- is >0
        // Create new property "count_i"
        // It will be a function object that has createCounterCollection's scope
        // as super scope, so that all the counters "count_i" share
        // all the information in the superscope 
        // (in this case the variable total is shared, but the base is not)
        collection["count_"+size] = createCounter();
    
    return collection;
}

let c1 = createCounterCollection(3); // 3 elems (0-2)
let c2 = createCounterCollection(10); // 10 elems (0-9)

// They share same total but different base
c1.count_0();
c1.count_1();
c1.count_1();
c1.count_2();
c1.count_2();
c1.count_2();

// They share same total but different base
c2.count_0();
c2.count_0();
c2.count_2();
c2.count_2();
c2.count_2();
c2.count_2();
c2.count_5();
c2.count_5();
c2.count_5();
c2.count_5();
c2.count_5();
c2.count_5();
c2.count_5();
c2.count_5();

let v1 = c1.getTotal();
let v2 = c2.getTotal();

console.log("c1's total counts: " + v1);
console.log("c2's total counts: " + v2);
