/*
function classifyTriangle(a, b, c) {
    // 1. Check if the side lengths can actually form a valid triangle
    if (a <= 0 || b <= 0 || c <= 0 || (a + b <= c) || (a + c <= b) || (b + c <= a)) {
        return "Not a valid triangle";
    }

    // 2. Classify the triangle based on side matches
    if (a === b && b === c) {
        return "Equilateral"; // All three sides are equal
    } else if (a === b || b === c || a === c) {
        return "Isosceles";   // Exactly two sides are equal
    } else {
        return "Scalene";     // No sides are equal
    }
}
// --- Test Cases ---
console.log(classifyTriangle(5, 5, 5)); // Output: "Equilateral"
console.log(classifyTriangle(5, 5, 3)); // Output: "Isosceles"
console.log(classifyTriangle(3, 4, 5)); // Output: "Scalene"
console.log(classifyTriangle(1, 2, 3)); // Output: "Not a valid triangle" (1 + 2 is not > 3)
*/

// Input side lengths (change these values to test different triangles)
let a = 5;
let b = 5;
let c = 3;

// 1. Check if the side lengths can actually form a valid triangle
if (a <= 0 || b <= 0 || c <= 0 || (a + b <= c) || (a + c <= b) || (b + c <= a)) {
    console.log("Not a valid triangle");
}
// 2. Check if all three sides are equal
else if (a === b && b === c) {
    console.log("Equilateral");
}
// 3. Check if exactly two sides are equal
else if (a === b || b === c || a === c) {
    console.log("Isosceles");
}
// 4. If it's valid but none of the sides match, it must be scalene
else {
    console.log("Scalene");
}
