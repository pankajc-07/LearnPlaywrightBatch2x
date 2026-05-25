let arr = [1, 2, 3];
console.log(arr);
console.log("***********************")

// Add to END
arr.push(4);
console.log(arr);
console.log("***********************")

// Remove from END
arr.pop();
console.log(arr);
console.log("***********************")

arr.push(5, 6);
console.log(arr);
console.log("***********************")

// Add to BEGINNING
arr.unshift(0);
console.log(arr);
console.log("***********************")

// Remove from BEGINNING
arr.shift();
console.log(arr);
console.log("***********************")

console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);
console.log("***********************")

//Practice examples
console.log("Example 01");
let status = ["pass", "fail", "noRun", "Error", "NA"];
console.log(status);
console.log("***********************")

status.push("Run");
console.log(status);
console.log("***********************")

status.pop();
console.log(status);
console.log("***********************")

status.push("InValid", "Valid");
console.log(status);
console.log("***********************")

status.unshift("ServerError");
console.log(status);
console.log("***********************")

status.shift();
console.log(status);
console.log("***********************")
