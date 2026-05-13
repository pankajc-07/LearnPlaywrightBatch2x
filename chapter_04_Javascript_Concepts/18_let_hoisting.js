// console.log(score); // ReferenceError: Cannot access 'score' before initialization
// let score = 100;

{
    // ---- TDZ for "score" starts here ----//
    /*
    console.log(score); // ReferenceError
    let score = 100;
    typeof score;*/

    // ---- TDZ for "score" Ends here ----//
    let score = 100;
    console.log(score);
}
