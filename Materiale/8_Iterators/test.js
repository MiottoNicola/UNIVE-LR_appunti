function PrimeSequence(max){
	
	this[Symbol.iterator] = function(){
		
		let currentPrime = 1;
		let maxPrime = max;
		
		return {		
		    next(){			
				let isPrime = false;
				while((!isPrime) && (currentPrime<maxPrime)){
					currentPrime++;
					isPrime = true;
					for(let i=2; i<currentPrime/2; i++)
						if(currentPrime % i === 0)
							isPrime = false;
				}
				if(currentPrime>=maxPrime)
					return { done: true };
				else
					return { value: currentPrime };
			}
		};
		
	}
	
}
let sequence = new PrimeSequence(1000);


for(const p1 of sequence)
   for(const p2 of sequence)
	 console.log(p1+" - "+p2)
 

function* oneDigitPrimes(){
	yield 2;
    yield 3;
    yield 5;
    yield 7;	
}	

let i = oneDigitPrimes();

for(const p1 of i)
   for(const p2 of i)
	 console.log(p1+" - "+p2)
 

function* primeSequenceGenerator(maxPrime){

    for(let candidate=2; candidate<maxPrime; candidate++){
	   isPrime = true;
	   for(let i=2; i<candidate/2; i++)
		   if(candidate % i === 0)
			  isPrime = false;
	   if(isPrime)
		   yield candidate;
	}
	
}
	
let g = primeSequenceGenerator(1000);

for(const p1 of g)
	 console.log(p1)
