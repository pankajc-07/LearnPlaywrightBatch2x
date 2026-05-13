/**
 * ============================================================
 * NULL vs UNDEFINED in JavaScript
 * ============================================================
 *
 * Think of it like this:
 * ----------------------
 * - UNDEFINED means: "I exist, but I have not been given a value yet."
 * - NULL means: "I exist, and I am intentionally set to nothing / empty."
 *
 * In simple words:
 * ---------------
 * undefined = JavaScript automatically says "I don't know the value yet"
 * null      = You (the programmer) manually say "There is no value here"
 *
 */

// ============================================================
// 1. UNDEFINED
// ============================================================

// A variable is declared but not assigned any value.
// JavaScript gives it the value `undefined` by default.
let userName;
console.log("userName is:", userName);         // undefined
console.log("Type of undefined:", typeof userName); // "undefined"

// A function that does not return anything, returns `undefined`.
function doNothing() {
    // no return statement
}
let result = doNothing();
console.log("Function returns:", result);      // undefined

// ============================================================
// 2. NULL
// ============================================================

// You intentionally set a variable to "nothing".
let userEmail = null;
console.log("userEmail is:", userEmail);       // null
console.log("Type of null:", typeof userEmail);   // "object"  (This is a known JS quirk!)

// Example: Resetting a value later in the program.
let discount = 10;
discount = null; // "There is no discount anymore"
console.log("discount is:", discount);         // null

// ============================================================
// 3. KEY DIFFERENCES (Quick Comparison Table)
// ============================================================

/*
┌──────────────────┬──────────────────────────────┬──────────────────────────────┐
│     Feature      │          undefined           │             null             │
├──────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Meaning          │ Value not assigned yet       │ Intentionally empty / none   │
├──────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Who sets it?     │ JavaScript (automatically)   │ Programmer (manually)        │
├──────────────────┼──────────────────────────────┼──────────────────────────────┤
│ typeof           │ "undefined"                  │ "object" (a bug in JS)       │
├──────────────────┼──────────────────────────────┼──────────────────────────────┤
│ == check         │ true  (null == undefined)    │ true                         │
├──────────────────┼──────────────────────────────┼──────────────────────────────┤
│ === check        │ false (strictly different)   │ false                        │
└──────────────────┴──────────────────────────────┴──────────────────────────────┘
*/

// ============================================================
// 4. PRACTICAL EXAMPLES
// ============================================================

// Example A: Form data before user fills it
let firstName;          // undefined - user hasn't typed anything yet
let middleName = null;  // null - user explicitly has no middle name

console.log("firstName:", firstName);   // undefined
console.log("middleName:", middleName); // null

// Example B: Comparing them
console.log("null == undefined :", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined);  // false (strict equality)

// Example C: Checking if a value is truly empty
let score;
if (score === undefined) {
    console.log("Score has not been initialized.");
}

let bonus = null;
if (bonus === null) {
    console.log("Bonus is intentionally set to nothing.");
}

// ============================================================
// 5. SUMMARY
// ============================================================

/*
    undefined → JavaScript says: "This is missing by accident."
    null      → You say:        "This is missing on purpose."

    When in doubt, use === (strict equality) to check for null or undefined.
*/
