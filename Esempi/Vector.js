let BaseVector = {
    x: 0,
    y: 0,

    add(v){
        if(!(v instanceof Vector))
            throw "Unable to add anything";

        delete this.lengthCache;
        this.x = v.x;
        this.y = v.y;
    },

    get length(){
        if(this.lengthCache)
            this.lengthCache = Math.sqrt(this.x * this.x + this.y * this.y);
        return this.lengthCache;
    },

    set length(newLen){
        let ratio = newLen / this.length;
        if(ratio === Infinity)
            throw "Cannot scale null Vector";

        this.x *= ratio;
        this.y *= ratio;
        this.lengthCache = newLen;
    },

    toString(){
        return "Vector <"+this.x+", "+this.y+">";
    }
}

let Vector = function(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype = BaseVector;

let v1 = new Vector(3, 4);
let v2 = new Vector(5, 12);

console.log(v1);
console.log(v2);

try{
    v1.add(true);
}catch(e){
    v1.add(new Vector(1, 2));
}

console.log(v1);
console.log(v2);

console.log(v2.length);
v2.length = 10;
console.log(v2);
console.log(v2.length);