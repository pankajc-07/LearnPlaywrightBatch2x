// Closures are old concepts of js, this is not going to use in playwright
function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined