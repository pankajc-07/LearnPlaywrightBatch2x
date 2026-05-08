let testStatus = "passed";

if(testStatus === "passed")
    {
    console.log("Green build");
}
else if(testStatus === "failed")
    {
    console.log("Red build check logs");
}else
    {
    console.log("unknown status");
}
console.log("*************************************");

let isLoggedIn = true;
let hasPermission = false;

if(isLoggedIn && hasPermission)
    {
    console.log("Access granted");
}
if(!isLoggedIn || !hasPermission)
    {
    console.log("Warning");
}
console.log("*************************************");

for(let i=1 ; i<=5 ; i++){
console.log("checking the value of index : " + i);
}
console.log("*************************************");

let attempts = 0;
while(attempts < 3){
    console.log("retry attempt" );
    attempts++;
}
console.log("*************************************");

let isLoaded = true;
do{
    console.log("checking if the page is loaded");
}while(!isLoaded);
console.log("*************************************");

for(let i=1 ; i<=20 ; i++){
    if(i === 5){
        continue;
    }
    if(i === 8){
        break;
    }
    console.log("checking the value of index : " + i);
}