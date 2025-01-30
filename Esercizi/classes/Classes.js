
// Factory approach
let a = 0;

function Range(from, to){
	let r = Object.create(Range.methods);
	r.from = from;
	r.to = to;
	return r;
}

Range.methods = {
	includes(x){
		return this.from <= x && x <= this.to;
	},
	toString(){
		return "("+this.from+"..."+this.to+")";
	},
	*[Symbol.iterator](){
		for(let x=this.from; x<=this.to; x++)
			yield x;
	}
}

let r1 = Range(10,20);
let r2 = Range(1,7);
let check1 = r1.includes(13);
let check2 = r2.includes(13);
console.log(""+r1);
for(let v of r1)
	console.log(v);



/*
// Constructor approach

function Range(from, to){
//	if(!new.target)
//		throw("this function is a constructor");
	if(!new.target)
		return new Range(from,to);
	this.from = from;
	this.to = to;
}

Range.prototype = {
	includes(x){
		return this.from <= x && x <= this.to;
	},
	toString(){
		return "("+this.from+"..."+this.to+")";
	},
	*[Symbol.iterator](){
		for(let x=this.from; x<=this.to; x++)
			yield x;
	}
}

let r1 = new Range(10,20);
let r2 = new Range(1,7);
let check1 = r1.includes(13);
let check2 = r2.includes(13);
console.log(""+r1);
for(let v of r1)
	console.log(v);

Range.prototype.works = true;

for(let v of r1)
	console.log(v);

*/
/*

// Class keyword approach

class Range {
	
	from = 0;
	to   = 0;
	
	constructor(from,to){
		if(from)
			this.from = from;
		if(to)
			this.to = to;
	}
	
	includes(x){
		return this.from <= x && x <= this.to;
	}
	
	toString(){
		return "("+this.from+"..."+this.to+")";
	}
	
	*[Symbol.iterator](){
		for(let x=this.from; x<=this.to; x++)
			yield x;
	}
	
	static parse(s){
		let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
		if(!matches)
			throw ("wrong range format");
		return new Range(parseInt(matches[1]),parseInt(matches[2]));
	}
}

*/

// Class keyword approach with private fields

// class Range {
	
// 	#from = 0;
// 	#to   = 0;
	
// 	static basicRange = new Range(0,0);
	
// 	constructor(from,to){
// 		if(from)
// 			this.#from = from;
// 		if(to)
// 			this.#to = to;
// 	}
	
// 	#privateMethod(){
// 		return 1;
// 	}
	
// 	includes(x){
// 		return this.#from <= x && x <= this.#to;
// 	}
	
// 	toString(){
// 		return "("+this.#from+"..."+this.#to+")";
// 	}
	
// 	*[Symbol.iterator](){
// 		for(let x=this.#from; x<=this.#to; x++)
// 			yield x;
// 	}
	
// 	get to(){
// 		return this.#to;
// 	}
	
// 	get from(){
// 		return this.#from;
// 	}
	
// 	static parse(s){
// 		let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
// 		if(!matches)
// 			throw ("wrong range format");
// 		return new Range(parseInt(matches[1]),parseInt(matches[2]));
// 	}
// }

// class Span extends Range{
	
// 	constructor(start,length){
// 		if(length>=0)
// 			super(start,start+length);
// 		else
// 			super(start+length,start);
// 	}
	
// }

// let r1 = new Range(10,20);
// let r2 = new Range(7,10);
// let r3 = Range.parse("(5...15)");
// let check1 = r1.includes(13);
// let check2 = r2.includes(13);
// console.log(""+r2);
// for(let v of r2)
// 	console.log(v);
// console.log(r2.from);
// console.log(r2.to);
// console.log(""+Range.basicRange);

// let r4 = new Span(7,3);
// console.log(""+r4);
// let r5 = new Span(7,-3);
// console.log(""+r5);

