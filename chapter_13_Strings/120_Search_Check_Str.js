// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 
console.log("********************************");

let URL = 'https://staging.amazon.com/api/login?retry=true';

console.log(URL.includes("staging"));
console.log(URL.includes("Production"));

console.log(URL.startsWith("htt"));
console.log(URL.startsWith("https://"));
console.log(URL.startsWith("http://"));

console.log(URL.endsWith("=true"));
console.log(URL.endsWith("tue"));

console.log(URL.indexOf("a"));
console.log(URL.lastIndexOf("a"));

console.log(URL.indexOf("nothere"));
console.log(URL.indexOf("x"));

console.log(URL.indexOf("https"));
console.log(URL.indexOf("//"));

console.log(URL.search(/login/));
console.log(URL.search(/vwo/));


