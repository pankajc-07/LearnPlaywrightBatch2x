// let is a Block scoped

let x = "Global";

if (true) {
    // TDZ for blocked-scope "x" stert here
    // console.log(x); // Refrrence error (Not "Global")

    let x = "Block"; // TDZ ends
    console.log(x); // "Block"
}