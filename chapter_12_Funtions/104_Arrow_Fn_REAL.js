// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function. 
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}
validateStatusCode(200);
console.log("*****************************************");

// This is a function as an expression. 
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}
validateStatusCode_Exp(301);
console.log("*****************************************");

// Arrow function 
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}
validateStatusCode_Arrow(202);
console.log("*****************************************");
