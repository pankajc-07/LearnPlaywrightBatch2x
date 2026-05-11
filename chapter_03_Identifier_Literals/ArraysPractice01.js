let arr1 = [2, 4, 6, 8, 10];

var arr2 = new Array(1, 3, 5, 7, 9);

let arr3 = Array(6);
arr3[0] = 12;
arr3[1] = 14;
arr3[2] = 16;
arr3[3] = 18;
arr3[4] = 20;
arr3[5] = 22;

console.log(arr1.length);
console.log("*********************************");

arr1[5] = 12;
arr1[6] = 14;
console.log(arr1.length);
console.log("*********************************");

arr3[6] = 24;
arr3[7] = 26;
console.log(arr3.length);
console.log("*********************************");

arr1.push(16);
arr1.push(18);
console.log(arr1.length);
console.log(arr1);
console.log("*********************************");

arr1.pop();
console.log(arr1.length);
console.log(arr1);
console.log("*********************************");

arr1.unshift(11);
arr1.unshift(9);
console.log(arr1.length);
console.log(arr1);
console.log("*********************************");

arr1.shift();
console.log(arr1.length);
console.log(arr1);
console.log("*********************************");




