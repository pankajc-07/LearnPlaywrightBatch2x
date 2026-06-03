// Given a string , Reverse it and print true if they are same.

// Madam is palindrome, pramod is not

console.log("Exampple 01");

let str = "Madam";
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + (str.charAt(i));
}
console.log(newStr);
if (str.toLowerCase() == newStr.toLowerCase())
    console.log("string is palindrome");
else
    console.log("string is not palindrome");
console.log("********************************");

console.log("Exampple 02");
let str01 = 'NET'; //str01
let str02 = "TEN"; //str02
let l01 = str01.length; //l01
let l02 = str02.length;//l02

if (l01 == l02) {
    str01 = str01.split('').sort().join('');
    str02 = str02.split('').sort().join('');

    if (str01 === str02)
        console.log("String is anagram");
    else
        console.log("String is not anagram");
}
else
    console.log("String is not anagram");





