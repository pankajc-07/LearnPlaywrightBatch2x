let browser = "Firefox";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");
}
console.log("******************************************");

// Practice Examples
console.log("Example 01");

let city = "Pune";

switch (city) {
    case "Pune":
    case "Mumbai":
    case "Nagpur":
    case "Akola":
        console.log(city + " Belongs to Maharashtra");
        break;
    case "Hydrabad":
        console.log(city + " Near to Maharashtra");
        break;
    case "Banglor":
        console.log(city + " Away from Maharashtra");
        break;
    default:
        console.log("I dont know where " + city + " is");
}
console.log("******************************************");

console.log("Example 02");
let colour = "Green";

switch (colour) {
    case "Green":
    case "Red":
    case "Yellow":
        console.log("This " + colour + " colour is the part of trafic signal")
        break;
    case "White":
        console.log("This " + colour + " colour is the colour of light");
        break;
    case "Black":
        console.log("This " + colour + " colour is the colour of dark");
        break;
    case "Pink":
        console.log("This " + colour + " colour is fav for girls");
        break;
    default:
        console.log("I dont know about " + colour + " colour");
}
console.log("******************************************");

console.log("Example 03");
let marks = 70;

switch (marks) {
    case 60:
    case 70:
    case 80:
    case 90:
        console.log(marks + " This are marks for 1st class");
        break;
    case 50:
    case 40:
        console.log(marks + " This are marks of 2nd class");
        break;
    default:
        console.log(marks + " This are marks of Fail")


}