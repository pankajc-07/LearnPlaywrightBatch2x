for (let pankaj = 1; pankaj <= 7; pankaj++) {
    console.log("value is = " + pankaj)
} // 1 to 7, Times -> 7

// var, let, const
console.log("***********************************");
for (let somya = 0; somya < 10; somya++) { // 0 to 9, Times -> 10
    console.log(somya);
} // 10 to 9, Times -> 10
console.log("***********************************");

for (let _1 = 0; _1 <= 10; _1++) {
    console.log(_1);
} // 0 to 10, Times -> 11
console.log("***********************************");

// Practice Examples
console.log("Example 01");
//Loop through numbers 1 to 15.//
// Use the modulus operator (%) inside an if statement to print only the odd numbers.

for (i = 1; i <= 15; i++) {
    if (i % 2 === 1) {
        console.log("This is an odd number = " + i);
    }
}
console.log("***********************************");

console.log("Example 02");
//Print numbers from 1 to 10
// but use an if statement to skip the number 5 entirely so it doesn't print.
for (i = 1; i <= 10; i++) {
    if (i !== 5) {
        console.log("Number is not 5, current number is = " + i)
    }
}
console.log("***********************************");

console.log("Example 03");
//Calculate the sum of all numbers from 1 to 10 (1 + 2 + 3 + ... + 10)
//and console.log the final total at the very end.//
// Hint: Create a let sum = 0; variable before your loop starts.
let sum = 0;
for (i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);
console.log("***********************************");

console.log("Example 04");
/* Print the multiplication table for the number 5
from $5 \times 1$ up to $5 \times 10$. Your output should look something like:
5 * 1 = 5
5 * 2 = 10*/

for (i = 1; i <= 10; i++) {
    let mul = 5 * i;
    console.log("5 * " + i + " = " + mul);
}
console.log("***********************************");

console.log("Example 05");
/*
Drawing Patterns =>
Write a nested loop to print a right-angled triangle pattern of asterisks (*) 
that looks like this in your console:
*
**
***
****
*****
*/

// We want 5 rows total
for (let row = 1; row <= 5; row++) {
    let line = ""; // Start with an empty line for this row

    // The inner loop runs 'row' number of times
    for (let col = 1; col <= row; col++) {
        line += "*"; // Append an asterisk to the current line string
    }
    console.log(line); // Print the completed line, then move to the next row
}
console.log("***********************************");

console.log("Example 06");
/*
*
**
***
*/

for (let row = 1; row <= 3; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}
console.log("***********************************");

console.log("Example 07");
// Inverted trianle

/*
*****
****
***
**
*
*/
// Start at 5 rows, and decrease the row count by 1 each time
for (let row = 5; row >= 1; row--) {
    let line = ""; // Reset the line string for the current row

    // The inner loop runs exactly 'row' number of times
    for (let col = 1; col <= row; col++) {
        line += "*";
    }

    console.log(line); // Print the row
}

console.log("***********************************");

console.log("Example 08");
/*
    *
   **
  ***
 ****
*****
*/

let totalRows = 5;

for (let row = 1; row <= totalRows; row++) {
    let line = "";

    // 1. Add the spaces (Total Rows minus the current row number)
    for (let space = 1; space <= totalRows - row; space++) {
        line += " ";
    }

    // 2. Add the asterisks (Equal to the current row number)
    for (let asterisk = 1; asterisk <= row; asterisk++) {
        line += "*";
    }

    console.log(line);
}
console.log("***********************************");

console.log("Example 09");

let totalRows01 = 7;
for (let row = 1; row <= totalRows01; row++) {
    let line = "";
    for (let space = 1; space <= totalRows01 - row; space++) {
        line += " ";
    }
    for (let star = 1; star <= row; star++) {
        line += "*"
    }
    console.log(line);
}
console.log("***********************************");

console.log("Example 10")
let totalRow = 9;
for (let row = 1; row <= totalRow; row++) {
    let line = "";
    for (let space = 1; space <= totalRow - row; space++) {
        line += " ";
    }
    for (let star = 1; star <= row; star++) {
        line += "*";
    }
    console.log(line)
}
console.log("***********************************");

console.log("Example 11")
for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}
console.log("***********************************");

console.log("Example 12")
for (let row = 5; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}
console.log("***********************************");

console.log("Example 13")
let totalRows13 = 5;
for (let row = 1; row <= totalRows13; row++) {
    let line = "";
    for (let space = 1; space <= totalRows13 - row; space++) {
        line += " ";
    }
    for (let star = 1; star <= row; star++) {
        line += "*";
    }
    console.log(line);
}
console.log("***********************************");

console.log("Example 14")
let totalRows14 = 7;
for (let row = totalRows14; row >= 1; row--) {
    let line = "";
    for (let space = 1; space <= totalRows14 - row; space++) {
        line += " ";
    }
    for (let star = 1; star <= row; star++) {
        line += "*";
    }
    console.log(line);
}
