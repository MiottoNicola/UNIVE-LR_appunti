const myString = "The cat is on the table";

function reverseString(str) {
    let split1 = myString.split(" ");
    let out = "";
    for(let i = 0; i < split1.length; i++) {
        let split = split1[i].split("");
        let reverse = split.reverse();
        out = out + reverse.join("") + " ";
    }
    return out;
}

console.log(myString); // The cat is on the table
console.log(reverseString(myString)); // ehT tac si no eht elbat
console.log(myString); // The cat is on the table