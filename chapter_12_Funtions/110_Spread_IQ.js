function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
add(...num);
console.log("*****************************************");

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...responseCodes); // true
console.log("*****************************************");

function multiply(a, b) {
    return a * b;
}
let num01 = [2, 9];
console.log(multiply(...num01));
console.log("*****************************************");

let testResults = ["pass", "fail", "pass"];
function test(...result) {
    return result.some(r => r === "pass");
    // return result.every(r => r === "pass");
}
console.log(test(...testResults));
console.log("*****************************************");

const defaultConfig = {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true
};

const customConfig = {
    viewport: { width: 1920, height: 1080 }, // Override
    geolocation: { latitude: 48.8584, longitude: 2.2945 }, // New property
    permissions: ['geolocation'] // New property
};

// Your code here: Create finalConfig
const finalConfig = {
    ...defaultConfig,
    ...customConfig
};

console.log(finalConfig);
// Note: Because customConfig comes second, its 'viewport' overrides the default 'viewport'.
console.log("*****************************************");

const featuredProducts = ['iPhone 15', 'MacBook Air'];
const discountedProducts = ['AirPods Pro', 'iPad Mini'];
const clearanceProducts = ['Lightning Cable'];

// Your code here: Create allProducts
const allProducts = [...featuredProducts, ...discountedProducts, ...clearanceProducts];

console.log(allProducts);
// Output: ['iPhone 15', 'MacBook Air', 'AirPods Pro', 'iPad Mini', 'Lightning Cable']
console.log("*****************************************");

const baseArgs = ['--start-maximized', '--incognito'];
const ciArgs = ['--disable-gpu', '--no-sandbox'];

function getLaunchArgs(isCI) {
    // Your code here using the spread operator
}

function getLaunchArgs(isCI) {
    return isCI ? [...baseArgs, ...ciArgs] : [...baseArgs];
}

console.log(getLaunchArgs(true));  // Output: ['--start-maximized', '--incognito', '--disable-gpu', '--no-sandbox']
console.log(getLaunchArgs(false)); // Output: ['--start-maximized', '--incognito']
console.log("*****************************************");

const userProfile = {
    username: 'playwright_expert',
    email: 'tester@example.com',
    password: 'SuperSecretPassword123',
    role: 'admin'
};

// Your code here: Extract 'password' and group the remaining properties into 'formData'

// This extracts password, and uses '...formData' to gather the rest of the properties
const { password, ...formData } = userProfile;

console.log(password); // Output: 'SuperSecretPassword123'
console.log(formData); // Output: { username: 'playwright_expert', email: 'tester@example.com', role: 'admin' }
console.log("*****************************************");

const currentUIOptions = ['Home', 'Dashboard', 'Settings'];
const archivedOptions = ['Dashboard', 'Old Profile', 'Settings', 'Legacy Reports'];

// Your code here: Create uniqueOptions array

// Passing the spread arrays into a Set removes duplicates, then we spread it back into an array.
const uniqueOptions = [...new Set([...currentUIOptions, ...archivedOptions])];

console.log(uniqueOptions);
// Output: ['Home', 'Dashboard', 'Settings', 'Old Profile', 'Legacy Reports']
