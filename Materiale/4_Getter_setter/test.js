let Vector = function(x=0, y=0){
	if(x instanceof Vector)
		[x,y] = [x.x, x.y];
	if(((typeof x)!="number")||((typeof y)!="number"))
		throw "Vectors must be based on numbers";
	this.x = x;
	this.y = y;
};

let BaseVector = {
	add(v){
		if(!(v instanceof Vector))
			throw "Parameter to add must be a Vector";
		this.x += v.x;
		this.y += v.y;
		delete this.lengthCache;
		return this;
	},
	get length(){
		if(!this.lengthCache)
		   this.lengthCache = Math.sqrt(this.x*this.x+this.y*this.y);
	    return this.lengthCache;
	},
    set length(l){
		let ratio = l / this.length;
		if(Math.abs(ratio) === Infinity)
			throw "cannot scale a null vector";
		this.x *= ratio;
		this.y *= ratio;
		this.lengthCache = l;
	}
};

Vector.prototype = BaseVector;

let v1 = new Vector(10,10);
let v2 = new Vector(v1);
let sum = (new Vector(v1)).add(v2);
v1.add(v2);
let l = v1.length;
v1.length = 60;
l = v1.length;
let v3 = new Vector();
l = v3.length;
v1.add(v2).add(v3);
