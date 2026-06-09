let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

// I want all the test cases which have failed. 
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }

    }

}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]

let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

let total = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(total);


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[0].length; j++) {
        if (suiteResults[i][j].includes("pass")) {
            console.log(suiteResults[i][j]);

        }
    }
}
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
/*
The Column Scraper (Data Isolation)
Automation Context: You scraped an entire web table into a 2D array,
but your test only cares about validating the data inside the "Email" column.

Problem Statement
Write a JavaScript function extractColumn(matrix, columnIndex)
that takes a 2D array and a 0-indexed column number,
and returns a flat (1D) array containing only the values from that specific column.
*/

function extractColumn(matrix, columnIndex) {
    // Use .map() to look at every row and extract the element at the specified index
    return matrix.map(row => row[columnIndex]);
}

// --- Test Your Code ---
const webTable = [
    ['1', 'Alice', 'alice@test.com', 'Admin'],
    ['2', 'Bob', 'bob@test.com', 'User'],
    ['3', 'Charlie', 'charlie@test.com', 'Moderator']
];

const emails = extractColumn(webTable, 2);
console.log(emails);
// Output: ['alice@test.com', 'bob@test.com', 'charlie@test.com']
console.log("*******************************************************");

console.log("Example 02")
/*
Row Finder by Cell Content (Dynamic UI Interaction)
Automation Context: You are testing a table with a "Delete" button on every row.
To click the correct button, you first need to find the exact row index where
a specific unique identifier (like a User ID or Order ID) exists.

Problem Statement
Write a function findRowIndexByKey(matrix, targetValue) that searches
a 2D array for a specific string. It should return the index of the row where the string is found.
If it doesn't exist, return -1.
*/
function findRowIndexByKey(matrix, targetValue) {
    for (let i = 0; i < matrix.length; i++) {
        // Check if the current row array includes the target value
        if (matrix[i].includes(targetValue)) {
            return i; // Return the row index immediately
        }
    }
    return -1; // Return -1 if the value isn't anywhere in the matrix
}

// --- Test Your Code ---
const userTable = [
    ['USR_101', 'John Doe', 'Active'],
    ['USR_102', 'Jane Smith', 'Pending'],
    ['USR_103', 'Alex Jones', 'Suspended']
];

const targetRow = findRowIndexByKey(userTable, 'USR_102');
console.log(targetRow); // Output: 1 (which corresponds to Jane Smith's row)
console.log("*******************************************************");

console.log("Example 03")
/*
The Grid Coordinates Search (Calendar & Matrix Navigation)
Automation Context: You are dealing with a grid layout (like a calendar or a dashboard widget panel).
You need to know the exact grid coordinates [row, column] of a specific value to interact with it.

Problem Statement
Write a function getGridCoordinates(matrix, target) that searches a 2D array and returns an array
containing the coordinates [rowIndex, colIndex] of the target item. If it is not found, return null.
*/
// --- Test Your Code ---
const calendarGrid = [
    ['', '', '1', '2', '3', '4', '5'],
    ['6', '7', '8', '9', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18', '19'],
    ['20', '21', '22', '23', '24', '25', '26']
];

function getGridCoordinates(matrix, target) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === target) {
                return [r, c]; // Found it! Return the coordinates
            }
        }
    }
    return null;
}

const coords = getGridCoordinates(calendarGrid, '25');
console.log(coords); // Output: [3, 5] (Row index 3, Column index 5)
console.log("*******************************************************");

console.log("Example 04")
/*
Matrix Diff Checker (UI vs. Database Validation)
Automation Context: You have extracted an entire UI data table into a 2D array,
and you have fetched the expected data from a database as a 2D array.
You need to write a assertion utility to ensure they match exactly.

Problem Statement
Write a function compareMatrices(matrixA, matrixB) that compares two 2D arrays of the same dimensions.
It should return true if every single cell matches perfectly, and false otherwise.
*/
function compareMatrices(matrixA, matrixB) {
    // Step 1: Structural check (Do they have the same number of rows?)
    if (matrixA.length !== matrixB.length) return false;

    for (let r = 0; r < matrixA.length; r++) {
        // Step 2: Row length check (Do the rows have the same number of columns?)
        if (matrixA[r].length !== matrixB[r].length) return false;

        for (let c = 0; c < matrixA[r].length; c++) {
            // Step 3: Strict value check per cell
            if (matrixA[r][c] !== matrixB[r][c]) {
                return false;
            }
        }
    }
    return true;
}

// --- Test Your Code ---
const uiTable = [
    ['Product A', '$10'],
    ['Product B', '$20']
];

const dbSnapshotCorrect = [
    ['Product A', '$10'],
    ['Product B', '$20']
];

const dbSnapshotIncorrect = [
    ['Product A', '$10'],
    ['Product B', '$99'] // Mismatch here
];

console.log(compareMatrices(uiTable, dbSnapshotCorrect));   // Output: true
console.log(compareMatrices(uiTable, dbSnapshotIncorrect)); // Output: false


// Self practice
// function compair(mA, mB) {
//     if (mA.length !== mB.length) return false;
//     for (let r = 0; r < mA.length; r++) {
//         if (mA[r].length !== mB[r].length) return false;
//         for (let c = 0; c < mA[r].length; c++) {
//             if (mA[r][c] !== mB[r][c]) return false
//         }
//     }
//     return true;
// }

// console.log(compair(uiTable, dbSnapshotCorrect));
// console.log(compair(uiTable, dbSnapshotIncorrect));

//Self Practice
// const calendarGrid = [
//     ['', '', '1', '2', '3', '4', '5'],
//     ['6', '7', '8', '9', '10', '11', '12'],
//     ['13', '14', '15', '16', '17', '18', '19'],
//     ['20', '21', '22', '23', '24', '25', '26']
// ];

// function findEle(matrix, target) {
//     for (i = 0; i < matrix.length; i++) {
//         for (j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === target) {
//                 // console.log("Value founf at : " + matrix[i][j]);
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }

// const value = findEle(calendarGrid, "11");
// console.log(value);

// Self Practice
// const userTable = [
//     ['USR_101', 'John Doe', 'Active'],
//     ['USR_102', 'Jane Smith', 'Pending'],
//     ['USR_103', 'Alex Jones', 'Suspended']
// ];

// function findIndex(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         if (matrix[i].includes(target)) {
//             return i;
//         }
//     }
//     return -1;
// }

// const value = findIndex(userTable, "USR_103");
// console.log(value);

// Self Practice
// const webTable = [
//     ['1', 'Alice', 'alice@test.com', 'Admin'],
//     ['2', 'Bob', 'bob@test.com', 'User'],
//     ['3', 'Charlie', 'charlie@test.com', 'Moderator']
// ];

// function coloumValue(matrix, column) {
//     return matrix.map(row => row[column])
// }

// const value = coloumValue(webTable, 2);
// console.log(value);
console.log("*******************************************************");

console.log("Example 05")
/*
The HTML Table Data Extractor
Scenario: You scraped a 3x3 UI data table using Playwright, and it returned a 2D array of strings.
You need to verify if a specific user exists in that grid.

Problem Statement
Write a function findUser(matrix, targetName) that takes a 2D array of strings and a target name.
Return an object { row: i, col: j } if the name is found. If the name does not exist, return null.
*/
function findUser(matrix, targetName) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === targetName) {
                return { row: i, col: j }; // Found the user coordinates
            }
        }
    }
    return null; // User not found
}

// Verification
const userGrid = [
    ["Admin", "Alice", "Active"],
    ["Editor", "Bob", "Inactive"],
    ["Viewer", "Charlie", "Active"]
];

console.log(findUser(userGrid, "Bob"));     // Output: { row: 1, col: 1 }
console.log(findUser(userGrid, "Eve"));     // Output: null
console.log("*******************************************************");

console.log("Example 06")
/*
Column-Wise Sorting Validator
Scenario: You clicked the column header "Price" on a web page to sort it in ascending order.
You grabbed all the row data into a 2D array. Now you need to validate if that specific column is actually sorted.

Problem Statement
Write a function isColumnSorted(matrix, colIndex) that takes a 2D array of numbers and a column index.
It should return true if the numbers in that specific column are sorted in ascending order, and false otherwise.
*/
function isColumnSorted(matrix, colIndex) {
    // Loop through the rows starting from the second row (index 1)
    for (let i = 1; i < matrix.length; i++) {
        const currentPrice = matrix[i][colIndex];
        const previousPrice = matrix[i - 1][colIndex];

        if (currentPrice < previousPrice) {
            return false; // The column is not sorted correctly
        }
    }
    return true;
}

// Verification
const tableData = [
    [101, 15, 2024],
    [102, 25, 2025],
    [103, 30, 2026] // Changed 20 to 30 to make it sorted
];

console.log(isColumnSorted(tableData, 1)); // Output: true
console.log("*******************************************************");

console.log("Example 07")
/*
The Low-Stock UI Highlighting Tool
Scenario: You are testing an inventory dashboard.You need to write a script that identifies
any cell where the stock is below a certain threshold so you can map out which UI elements need attention.

Problem Statement
Write a function getLowStockPositions(matrix, threshold) that takes a 2D array of numbers representing
inventory counts and returns an array of coordinate arrays [row, col] for every item below the threshold.
*/
function getLowStockPositions(matrix, threshold) {
    const lowStockCoordinates = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < threshold) {
                lowStockCoordinates.push([i, j]);
            }
        }
    }

    return lowStockCoordinates;
}

// Verification
const inventory = [
    [50, 12, 85],
    [4, 90, 33],
    [100, 0, 75]
];

console.log(getLowStockPositions(inventory, 10)); // Output: [ [ 1, 0 ], [ 2, 1 ] ]
console.log("*******************************************************");

console.log("Example 08")
/*
Flattening Complex Dynamic Forms
Scenario: You are dealing with a dynamic multi-section form where each section contains a list of input values.
You grabbed these values section-by-section (creating a 2D array), but your test assertion expects a flat,
single-level array of all values combined.

Problem Statement
Write a function flattenFormValues(matrix) that takes a 2D array of varying lengths (a jagged array)
and flattens it into a single 1D array without using the built-in Array.prototype.flat().
*/
function flattenFormValues(matrix) {
    const flatArray = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            flatArray.push(matrix[i][j]);
        }
    }

    return flatArray;
}

// Verification
const formSections = [
    ["John", "Doe"],
    ["US", "NY", "10001"],
    ["Visa"]
];

console.log(flattenFormValues(formSections));
// Output: [ 'John', 'Doe', 'US', 'NY', '10001', 'Visa' ]

