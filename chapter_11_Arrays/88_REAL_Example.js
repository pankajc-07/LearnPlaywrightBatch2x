let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);
console.log("********************************");

browser.pop();
console.log(browser);
console.log("********************************");

let removed = browser.shift();
console.log(browser);
console.log(removed);
console.log("********************************");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}
console.log("********************************");

//Practice examples
console.log("Example 01");
let servers = ["branch1", "branch2", "master", "releaseStaging", "staging", "production", "master2"];
console.log(servers.length);
console.log(servers);
console.log("********************************");

servers.pop();
console.log(servers.length);
console.log(servers);
console.log("********************************");

let removed01 = servers.shift();
console.log(removed01);
console.log(servers);
console.log("********************************");

for (let i = 0; i < servers.length; i++) {
    console.log(servers[i]);
    if (servers[i] === "releaseStaging") {
        console.log(" => This server is removed!");
    }
}
