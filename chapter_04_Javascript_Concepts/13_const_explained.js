const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
// BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.

console.log(BASE_URL);

let name = "pending";
name = "done";
console.log(name);

{
    let name = "pankaj";
    console.log(name);
}

function say() {

    let name = "pankaj01";
    console.log(name);
}

say();
say();

console.log("**********************************");

const URL = "Google.com";
console.log(URL);

function function01() {
    const URL = "Firefox.com";
    console.log(URL);

    if (true) {
        const URL = "Edge.com";
        console.log("This is from if block inside the function : " + URL);
    }
    console.log("This is outside if block inside the function : " + URL);
}

function01();

