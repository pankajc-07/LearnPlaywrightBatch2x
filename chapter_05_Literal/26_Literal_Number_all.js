/**
 * ============================================================
 * JavaScript NUMBER LITERALS - All Types
 * ============================================================
 *
 * In JavaScript, there is only ONE number type: `number`
 * (Until BigInt was introduced for very large integers).
 *
 * Numbers can be written with or without decimals.
 * They can also be written in different bases (hex, octal, binary).
 *
 */

// ============================================================
// 1. INTEGER LITERALS (Whole Numbers)
// ============================================================

let count = 100;        // Positive integer
let negative = -200;    // Negative integer
let zero = 0;           // Zero

console.log("count:", count, "| type:", typeof count);
console.log("negative:", negative, "| type:", typeof negative);
console.log("zero:", zero, "| type:", typeof zero);
console.log("------------------------------------------");

// ============================================================
// 2. FLOATING-POINT LITERALS (Decimals)
// ============================================================

let price = 99.99;          // Standard decimal
let smallDecimal = 0.0001;  // Very small decimal
let pi = 3.14159;           // Famous mathematical constant

console.log("price:", price, "| type:", typeof price);
console.log("smallDecimal:", smallDecimal, "| type:", typeof smallDecimal);
console.log("pi:", pi, "| type:", typeof pi);
console.log("------------------------------------------");

// ============================================================
// 3. SCIENTIFIC / EXPONENTIAL NOTATION
// ============================================================
// Used for very large or very small numbers.
// Format:  number e exponent  (e.g., 1e5 means 1 * 10^5)

let million = 1e6;          // 1 * 10^6  = 1000000
let tiny = 1e-6;            // 1 * 10^-6 = 0.000001
let large = 3.14e2;         // 3.14 * 10^2 = 314

console.log("million (1e6):", million, "| type:", typeof million);
console.log("tiny (1e-6):", tiny, "| type:", typeof tiny);
console.log("large (3.14e2):", large, "| type:", typeof large);
console.log("------------------------------------------");

// ============================================================
// 4. HEXADECIMAL NUMBERS (Base 16)
// ============================================================
// Prefix with 0x or 0X
// Digits: 0-9 and A-F (or a-f)

let redColor = 0xFF;        // 255 in decimal
let greenColor = 0xA3;      // 163 in decimal
let hexNum = 0x1F4;         // 500 in decimal

console.log("redColor (0xFF):", redColor, "| type:", typeof redColor);
console.log("greenColor (0xA3):", greenColor, "| type:", typeof greenColor);
console.log("hexNum (0x1F4):", hexNum, "| type:", typeof hexNum);
console.log("------------------------------------------");

// ============================================================
// 5. OCTAL NUMBERS (Base 8)
// ============================================================
// Prefix with 0o or 0O
// Digits: 0-7 only

let octalNum = 0o77;        // 63 in decimal
let octalEight = 0o10;      // 8 in decimal
let octalLarge = 0o377;     // 255 in decimal

console.log("octalNum (0o77):", octalNum, "| type:", typeof octalNum);
console.log("octalEight (0o10):", octalEight, "| type:", typeof octalEight);
console.log("octalLarge (0o377):", octalLarge, "| type:", typeof octalLarge);
console.log("------------------------------------------");

// ============================================================
// 6. BINARY NUMBERS (Base 2)
// ============================================================
// Prefix with 0b or 0B
// Digits: 0 and 1 only

let binaryFive = 0b101;     // 5 in decimal
let binaryTen = 0b1010;     // 10 in decimal
let binary255 = 0b11111111; // 255 in decimal

console.log("binaryFive (0b101):", binaryFive, "| type:", typeof binaryFive);
console.log("binaryTen (0b1010):", binaryTen, "| type:", typeof binaryTen);
console.log("binary255 (0b11111111):", binary255, "| type:", typeof binary255);
console.log("------------------------------------------");

// ============================================================
// 7. BIGINT (For Very Large Integers)
// ============================================================
// Created by appending 'n' to the end of an integer.
// Used when numbers are larger than Number.MAX_SAFE_INTEGER.

let bigNumber = 9007199254740991n;              // Safe integer limit
let hugeNumber = 12345678901234567890123456789n; // Very large number
let bigFromFunc = BigInt(9876543210);           // Using BigInt() function

console.log("bigNumber:", bigNumber, "| type:", typeof bigNumber);
console.log("hugeNumber:", hugeNumber, "| type:", typeof hugeNumber);
console.log("bigFromFunc:", bigFromFunc, "| type:", typeof bigFromFunc);
console.log("------------------------------------------");

// ============================================================
// 8. SPECIAL NUMERIC VALUES
// ============================================================

// Infinity - Result of dividing by zero or very large number
let posInfinity = Infinity;
let negInfinity = -Infinity;
let divideByZero = 1 / 0;

console.log("posInfinity:", posInfinity, "| type:", typeof posInfinity);
console.log("negInfinity:", negInfinity, "| type:", typeof negInfinity);
console.log("1 / 0 =", divideByZero);

// NaN - Not a Number (result of invalid math operation)
let notANumber = NaN;
let invalidMath = "hello" / 2;
let sqrtNegative = Math.sqrt(-1);

console.log("notANumber:", notANumber, "| type:", typeof notANumber);
console.log("'hello' / 2 =", invalidMath);
console.log("Math.sqrt(-1) =", sqrtNegative);
console.log("------------------------------------------");

// ============================================================
// 9. SIGNED ZEROS (+0 and -0)
// ============================================================
// JavaScript has both positive and negative zero!

let positiveZero = +0;
let negativeZero = -0;

console.log("positiveZero:", positiveZero);
console.log("negativeZero:", negativeZero);
console.log("Are they equal? (0 === -0):", 0 === -0); // true
console.log("1 / +0 =", 1 / +0);   // Infinity
console.log("1 / -0 =", 1 / -0);   // -Infinity
console.log("------------------------------------------");

// ============================================================
// 10. SUMMARY TABLE
// ============================================================

console.log("\n===== SUMMARY OF NUMBER TYPES IN JAVASCRIPT =====\n");

console.log("1. Integer        ->  let a = 100;");
console.log("2. Negative       ->  let b = -50;");
console.log("3. Float/Decimal  ->  let c = 3.14;");
console.log("4. Scientific     ->  let d = 1e6;       // 1000000");
console.log("5. Hexadecimal    ->  let e = 0xFF;       // 255");
console.log("6. Octal          ->  let f = 0o77;       // 63");
console.log("7. Binary         ->  let g = 0b1010;     // 10");
console.log("8. BigInt         ->  let h = 9007199254740991n;");
console.log("9. Infinity       ->  let i = Infinity;   // or 1/0");
console.log("10. NaN           ->  let j = NaN;        // Not a Number");
console.log("\nNOTE: All regular numbers have type 'number'.");
console.log("      Only BigInt has type 'bigint'.");

/*
┌──────────────────┬──────────────────────────────┬──────────────────┐
│   Number Type    │         Example              │     Output       │
├──────────────────┼──────────────────────────────┼──────────────────┤
│ Integer          │ let a = 100;                 │ 100              │
│ Negative         │ let b = -50;                 │ -50              │
│ Float            │ let c = 3.14;                │ 3.14             │
│ Scientific       │ let d = 1e3;                 │ 1000             │
│ Hexadecimal      │ let e = 0xFF;                │ 255              │
│ Octal            │ let f = 0o10;                │ 8                │
│ Binary           │ let g = 0b101;               │ 5                │
│ BigInt           │ let h = 123n;                │ 123n             │
│ Infinity         │ let i = 1/0;                 │ Infinity         │
│ NaN              │ let j = "abc" / 2;           │ NaN              │
└──────────────────┴──────────────────────────────┴──────────────────┘
*/
