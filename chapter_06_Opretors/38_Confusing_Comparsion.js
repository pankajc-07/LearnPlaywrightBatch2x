// Confusing Comparisons: == vs ===
// These examples show why === is recommended over ==

console.log("=== null vs undefined ===");
console.log(null == undefined);   // true  (special rule in loose equality)
console.log(null === undefined);  // false (different types)
console.log(null == 0);           // false (null only equals undefined with ==)
console.log(null === 0);          // false
console.log(undefined == 0);      // false
console.log(undefined === 0);     // false

console.log("\n=== NaN (Not a Number) ===");
console.log(NaN == NaN);          // false (NaN is never equal to anything, even itself)
console.log(NaN === NaN);         // false
console.log(Number.isNaN(NaN));   // true  (correct way to check NaN)

console.log("\n=== Empty Array [] ===");
console.log([] == false);         // true  ([] converts to "", then to 0, 0 == false)
console.log([] === false);        // false
console.log([] == 0);             // true  ([] -> "" -> 0)
console.log([] === 0);            // false
console.log([] == "");            // true  ([] -> "")
console.log([] === "");           // false
console.log([0] == false);        // true  ([0] -> "0" -> 0, 0 == false)
console.log([0] === false);       // false

console.log("\n=== Empty Object {} ===");
console.log({} == false);         // false ({} converts to "[object Object]")
console.log({} === false);        // false
console.log({} == "[object Object]"); // true  (object to string conversion)
console.log({} === "[object Object]"); // false

console.log("\n=== String vs Number edge cases ===");
console.log("" == false);         // true  ("" -> 0, 0 == false)
console.log("" === false);        // false
console.log("0" == false);        // true  ("0" -> 0, 0 == false)
console.log("0" === false);       // false
console.log("1" == true);         // true  ("1" -> 1, 1 == true)
console.log("1" === true);        // false
console.log("2" == true);         // false ("2" -> 2, 2 != true)
console.log("2" === true);        // false

console.log("\n=== Transitivity broken! ===");
console.log("0" == 0);            // true
console.log(0 == "");             // true
console.log("0" == "");           // false (!!) - Transitivity fails with ==

console.log("\n=== null vs undefined in math ===");
console.log(null + 1);            // 1     (null -> 0 in math)
console.log(undefined + 1);       // NaN   (undefined -> NaN in math)
console.log(null == 0);           // false (but null becomes 0 in math!)
console.log(undefined == NaN);    // false

console.log("\n=== Boolean quirks ===");
console.log(true == "1");         // true
console.log(true == "true");      // false ("true" -> NaN, NaN != 1)
console.log(false == "false");    // false ("false" -> NaN, NaN != 0)
console.log(false == "0");        // true  ("0" -> 0)

console.log("\n=== Key Takeaway ===");
// Always use === and !== to avoid unexpected type coercion
// == can lead to confusing bugs because of implicit type conversion
