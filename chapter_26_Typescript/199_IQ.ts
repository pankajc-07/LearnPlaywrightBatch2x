function buildEndpoint(base: string, path: string): string {
    return base + path;
}

function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}

console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("404 is success:", isSuccessCode(404));
logTestStep("Navigate to login page");
console.log("***********************************************");

//Practice Examples
console.log("Example 01");
function formatWelcomeMessage(name: string): void {
    console.log("---Welcome, " + name + "!---");
}
formatWelcomeMessage("Pankaj");
console.log("***********************************************");

console.log("Example 02");
function calculateDiscount(price: number, discountPercent: number): number {
    return price - (price * (discountPercent / 100));
}

console.log("Final price: ", calculateDiscount(100, 15));
console.log("***********************************************");

console.log("Example 03");
function isValidPassword(password: string): boolean {
    return password.length >= 8;
}

console.log("Is the password valid?", isValidPassword("secret"));
console.log("Is the password valid?", isValidPassword("secret1234567"));
console.log("***********************************************");

console.log("Example 04");
function createEmailString(username: string, domain: string): string {
    return username + "@" + domain
}

console.log("Email ID is : ", createEmailString("Pankaj", "gmail.com"));
console.log("***********************************************");

console.log("Example 05");
function isFreezing(tempCeelsius: number): boolean {
    return tempCeelsius <= 0;
}

console.log("Is freezing? : ", isFreezing(10));
console.log("Is freezing? : ", isFreezing(-2));
console.log("***********************************************");

console.log("Example 06");
/*
Example 1: formatPrice => Currency FormatterSimulates an e-commerce checkout module
that formats product prices with optional currency symbols.
*/
function formatPrice(amount: number, currency: string = "$"): string {
    return currency + amount.toFixed(2);
}

console.log(formatPrice(70.02468));
console.log(formatPrice(21, "€"));
console.log("***********************************************");

console.log("Example 07");
/*
Example 2: getAverage => Array StatisticsSimulates a grading platform computing
the average score from a list of student exam results.
*/
function getAverage(scores: number[]): number {
    if (scores.length === 0) return 0;

    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length
}
console.log("Average score:", getAverage([80, 90, 100]));
console.log("Average score:", getAverage([]));
console.log("***********************************************");

console.log("Example 08");
/*
Example 3: parseId => Type Narrowing with Union TypesSimulates an API client database fetch
where a unique record identifier could arrive as a pure number or a UUID string.
*/
function parseId(id: string | number): string {
    if (typeof id === "string") {
        return id.toLocaleUpperCase();
    } else {
        return "ID_000" + id;
    }
}

console.log(parseId(101));
console.log(parseId("user_123"));
console.log("***********************************************");

console.log("Example 09");
/*
Example 4: setRole => Literal Type ConstraintsSimulates an access control layer ensuring
users are assigned only pre-approved corporate system roles.
*/
function setRole(role: "admin" | "sditor" | "viewer"): void {
    console.log("[ACCESS] Role assigned:" + role);
}

setRole("admin");
// setRole("guest");
// Error: Argument of type '"guest"' is not assignable to parameter of type '"admin" | "editor" | "viewer"'.
console.log("***********************************************");

console.log("Example 10");
/*
Example 5: getCoordinates => Tuple RepresentationSimulates a geolocation mapping module mapping
latitude and longitude pairs as structured coordinates.
*/
function getCoordinates(city: string): [number, number] {
    switch (city.toLocaleLowerCase()) {
        case "new york":
            return [40.7128, -74.0060];
        case "london":
            return [51.5074, -0.1278];
        default:
            return [0, 0];
    }
}

const coords = getCoordinates("London");
console.log(`London is located at Lat: ${coords[0]}, Lng: ${coords[1]}`);

const coords01 = getCoordinates("Paris");
console.log(`Paris is located at Lat: ${coords01[0]}, Lng: ${coords01[1]}`);




