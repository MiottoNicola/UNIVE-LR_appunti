// Factory function
function Range(from, to ){

    let r = Object.create(Range.methods); 
    // Assigns prototype so that 
    // any change in Range.methods = {...} reverbs into r
    // All new objects have independent from and to, but same functions

    r.from = from;
    r.to = to;

    // r.includes = function(x){return this.from <= x && x<this.to;}; 
    // This would duplicate this method every time an object is created

    return r; // Returns fresh object
}
// local scope dies unless Range() had a function assignment the scope
// would still be available

Range.methods = {
    includes(x){return this.from <=x && x<this.to;},

    toString() {return "("+this.from+"..."+this.to+")";}
}; 
// This makes a prototype for all the methods
// So all the values for from and to are independent
// Also the methods includes are shared but if modified
// like r1.includes = ...;  it is only valid for that instance 

let r1 = Range(1, 10);
let r2 = Range(100, 120);

// -----------------------------------------------

// Function as Constructor
function Range(from=0, to=0 ){

    // let this = Object.create(Range.prototype); 

    if( ! new.target )
        return new Range(from, to)

    this.from = from;
    this.to = to;

    // return r; 
}

Range.prototype = {
    includes(x){return this.from <=x && x<this.to;},

    toString() {return "("+this.from+"..."+this.to+")";}
}; 

let r3 = new Range(1,10);

// -----------------------------------------------

// Class keyword

class Range{

    constructor(from=0, to=0){
        this.from = from;
        this.to = to;
    }

}

class Range { 
    constructor(from, to) {
        // Store the start and end points (state) of this new range object. 
        // These are noninherited properties that are unique to this object. 
        this.from = from;
        this.to = to;
    }

    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric. 
    includes(x) { 
        return this.from <= x && x <= this.to; 
    }
    
    // A generator function that makes instances of the class iterable. 
    // Note that it only works for numeric ranges. 
    *[Symbol.iterator]() { 
        for(let x = Math.ceil(this.from); x <= this.to; x++) 
            yield x; 
    }
    
    // Return a string representation of the range
    toString() { 
        return `(${this.from}...${this.to})`; 
    } 
}