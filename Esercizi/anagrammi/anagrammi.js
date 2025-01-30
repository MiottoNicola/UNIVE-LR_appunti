function factorial(n) { 
    let result = 1; 
 
    if(n === 0){
        return 1;
    }
    for (let i = 2; i <= n; i++){
        result = result * i; 
    }
    return result; 
}

// In how many ways can we sort the n elements
// of a set (where there can be repetitions)?
function simplePermutations(word){   
    let repetitions = 1;

    // We must remove the factorial of elements with multiple occurences
    // by definition of simple permutation
    new Set(word).forEach(
        (value, key, set) => {
            let count = word.split(value).length - 1;
            if(count > 1){
                repetitions *= factorial(count);
            }
        }
    );

    return (factorial(word.length)/repetitions);
}

// How many subsets of k elements can be possibly
// created from a set of n elements?
function simpleCombination(word){

}

console.log(simplePermutations("PICCHE"));