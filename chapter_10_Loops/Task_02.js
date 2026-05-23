/*
Write a program that prints numbers from 1 to 100.
However, for multiples of 3, print "Fizz" instead of the number,
and for multiples of 5, print "Buzz."
For numbers that are multiples of both 3 and 5, print "FizzBuzz."
*/

// Solution 01 =>
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log("Fizz" + " => Number is multiple of 3 and current number is = " + i);

//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log("Buzz" + " => Number is multiple of 5 and current number is = " + i);

//     } else if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz" + " => Number is multiple of 3 & 5 and current number is = " + i);
//     }
// }

// Solution 02 =>
// for (let i = 1; i <= 100; i++) {
//     // 1. Check for multiples of both 3 and 5 first
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     // 2. Check for multiples of 3
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     // 3. Check for multiples of 5
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     // 4. If none of the above match, print the actual number
//     else {
//         console.log(i);
//     }
// }

// Solution 03 =>
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");

    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");

    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i)
    }
}