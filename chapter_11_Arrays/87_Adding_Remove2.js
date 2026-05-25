let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5
console.log("********************************");

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);
console.log(arr);
console.log("********************************");

arr.splice(2, 0, 99); // add
console.log(arr);
console.log("********************************");

arr.splice(2, 1, 101); // replace
console.log(arr);
console.log("********************************");

// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5
console.log("********************************");

arr.splice(1, 2, 10, 20); // replace
console.log(arr);
console.log("********************************");

//Practice examples
console.log("Example 01");
let num01 = [11, 22, 33, 44, 55];
num01.push(66, 77);
console.log(num01);
console.log("********************************");

num01.splice(2, 2);
console.log(num01);//11,22,55,66,77
console.log("********************************");

num01.splice(2, 0, 88); // add
console.log(num01); //11,22,88,55,66,77
console.log("********************************");

num01.splice(2, 1, 33); // replace
console.log(num01);//11,22,33,55,66,77
console.log("********************************");

num01.splice(2, 2, 44, 4444); // replace
console.log(num01);//11,22,33,44,4444,66,77
console.log("********************************");




