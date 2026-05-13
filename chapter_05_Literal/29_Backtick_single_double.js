/**
 * ============================================================
 * SINGLE vs DOUBLE vs BACKTICK QUOTES in JavaScript
 * ============================================================
 *
 * Single (' ') and Double (" ") quotes are SAME.
 * Backtick (` `) is special - it supports variables and multi-line strings.
 *
 */

let name = "Pankaj";
let city = 'Bangalore';

// Single & Double quotes - Exactly the same thing
let msg1 = 'Hello ' + name;
let msg2 = "Hello " + name;
console.log(msg1); // Hello Pankaj
console.log(msg2); // Hello Pankaj

// Backtick (Template Literal) - Supports variables with ${} and multi-line
let msg3 = `Hello ${name}, welcome to ${city}!`;
console.log(msg3); // Hello Pankaj, welcome to Bangalore!

// Multi-line string using backtick
let multiLine = `
  Name: ${name}
  City: ${city}
`;
console.log(multiLine);

/*
┌──────────────┬──────────────────────────────────────────────┐
│   Quote      │              Key Difference                  │
├──────────────┼──────────────────────────────────────────────┤
│ 'Single'     │ Normal string, needs + for variables         │
│ "Double"     │ Normal string, needs + for variables         │
│ `Backtick`   │ Template literal: ${variable} + multi-line   │
└──────────────┴──────────────────────────────────────────────┘
*/
