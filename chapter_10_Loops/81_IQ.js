for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}// continue => continue is the keyword when this condition match it continue the loop and does not print that condition value
console.log("********************************************");

// Practice Examples
console.log("Example 01");
for (let p = 0; p <= 5; p++) {
    if (p === 3) continue;
    console.log(p);
}
console.log("********************************************");

console.log("Example 02");
for (let q = 2; q <= 7; q++) {
    if (q === 4) continue;
    if (q === 5) continue;
    console.log(q);
}
console.log("********************************************");

console.log("Example 03");
for (let r = 0; r <= 10; r++) {
    if (r === 0) continue;
    if (r >= 5) continue;
    console.log(r);
}