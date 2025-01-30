class Range{
    #from;
    #to;

    constructor(from, to){
        this.#from = from;
        this.#to = to;
    }

    includes(x){ return this.#from <= x && x <= this.#to; }

    *[Symbol.iterator](){
        for(let x = Math.ceil(this.#from); x <= this.#to; x++)
            yield x;
    }

    toString(){ return `(${this.#from}...${this.#to})`; }

    static parse(s){
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if(matches == null)
            throw new Error("Invalid Range format");
        return new Range(parseInt(matches[1]),parseInt(matches[2]));
    }
}

let r = new Range(1,10);

console.log(r);
console.log(r.includes(5));
console.log(r.includes(11));
console.log(r.toString());

let r2 = Range.parse("(1...20)");
console.log(r2);
console.log(r2.includes(5));
console.log(r2.includes(11));
console.log(r2.toString());

for(let e of r)
    console.log(e);

for(let e in r)
    console.log(e);


function span(start, span){
    if(span >= 0){
        this.from = start;
        this.to = start+span;
    }else{
        this.from = start+span;
        this.to = start;
    }
}

span.prototype = Object.create(Range.prototype);
span.prototype.constructor = span;
span.prototype.toString = function(){ return `(${this.from}...${this.to-this.from})`; }

let s = new span(1,10);
console.log(s);