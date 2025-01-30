let values = [ 1, 4, 5, 6, 12 ];

let sum = 0;
values.forEach( (val) => { sum += val; } );

let evenSum = 0;
values.forEach( (val,i) => { evenSum += val*(1-(i%2)); } );

let clamping = (val,i,a) => { a[i] = val>=5?val:0; }

values.forEach( clamping );

let v2 = [1,2,3,4,5,6,7,8];
let res = v2.forEach( clamping );
console.log(v2);

let v3 = [10,20,3,4,5,6,7,8];

let v3_mapped = v3.filter( (v => v >= 5 ));

function removeLowValues(v,i,a){
	if(v<5)
		delete a[i];
}
v3.forEach(removeLowValues);

let compact_v3 = v3.filter( (v) => true );

// ForEach implementation
class MagicalArray extends Array{
	forEach(f){
		for(let i=0; i<this.length; i++)
			if(this[i])
				f(this[i],i,this);
	}
}

function square(x){ return x*x; }

let squared_values = values.map(square);

values[1000] = true;

let positions_values = values.map( (v,i) => i );

let big_values = values.filter( (x) => x>10 );

let odd_value = values.find( (v) => v%2===1 );
let odd_index = values.findIndex( (v) => v%2===1 );

function resetValue(v,i,a){ 
   a[i] = 0; 
   return true;
}
let disruptive_find_position = values.find( resetValue );

values = [1,2,4,8,16,32,64];
let check_1 = values.some( (x) => (x===0) );
let check_2 = values.some( (x) => (x>10000) );
let monotone_strictly_growing = ! values.some( (x,i,a) => x>=a[i+1] )


let sum_values = values.reduce ( (accumulator,v,i,a) => accumulator+v );

let product_values = values.reduce ( (accumulator,v,i,a) => accumulator*v, 1 );

let sorted = values.sort();

let sorted_numerical = values.sort( (a,b) => a-b );

let myslice = sorted_numerical.slice(2,4);

sorted_numerical.splice(2,4,...[10,11,12]);

sorted_numerical.splice(2,4,..."pippo");

1;