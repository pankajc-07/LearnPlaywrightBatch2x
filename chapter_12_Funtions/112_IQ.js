// Nested scope | blocked scope 
// This is not used in automations
function outer() {
    let x = 10;// this is allowed to use inside function under this function

    function inner() {
        let y = 20;// this is not allowed to use outside the inner function, menas not allowed to use in outer functions
        console.log(x);

    }
    inner();
    console.log(y);
}

outer();