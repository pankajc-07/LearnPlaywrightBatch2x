console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  //  🤯 (transitivity broken!)
/*
In JavaScript, the == operator uses the Abstract Equality Comparison Algorithm, which includes type coercion rules.
For "" == "0":
1. Both operands are strings (no type coercion needed)
2. JavaScript performs a simple string comparison
3. "" (empty string) is not equal to "0" (string containing the character "0")
So it returns false because they are different string values.
The confusion usually comes from cases where coercion does happen:
"" == 0     // true  ("" coerces to 0)
"0" == 0    // true  ("0" coerces to 0)
"" == "0"   // false (both strings, direct comparison)
This breaks transitivity (if A == B and B == C, then A should == C), which is one of the well-known quirks of JavaScript's loose equality operator.
The fix: Always use === (strict equality) unless you explicitly need coercion. With strict equality:
"" === "0"   // false (correct)
"" === 0     // false (no surprise)
This is why the JavaScript community recommends === over ==.
*/
console.log("**********************************");

console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);