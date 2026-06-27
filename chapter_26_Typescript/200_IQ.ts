let responseCode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("All Codes", responseCode);
console.log("Failed Codes", getFailedCodes(responseCode));
console.log("***********************************************");

//Practice Examples
console.log("Example 01");
/*
Example 1: getActiveUsers => Filtering Objects in an ArraySimulates a user management panel that
extracts only the accounts that are currently marked as active.
*/
interface User {
    id: number;
    username: string;
    isActive: boolean;
}

const userList: User[] = [
    { id: 1, username: "alice", isActive: true },
    { id: 2, username: "bob", isActive: false },
    { id: 3, username: "charlie", isActive: true }
];

function getActiveUsers(users: User[]): User[] {
    return users.filter(function (user: User): boolean {
        return user.isActive;
    })
}

console.log("All users : ", userList);
console.log("Active users : ", getActiveUsers(userList));
console.log("***********************************************");

console.log("Example 02");
/*
Example 2: capitalizeNames => Transforming Arrays with mapSimulates a data sanitization utility that
standardizes lowercased database entries by capitalizing them.
*/
function capitalizeNames(names: string[]): string[] {
    return names.map(function (name: string): string {
        if (name.length === 0) return name;
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    })
}

const rawNames: string[] = ["sam", "ALEX", "jess"];
console.log("Sanitized Names:", capitalizeNames(rawNames));
console.log("***********************************************");

console.log("Example 03");
/*
Example 3: findAdmin => Searching Arrays with findSimulates a permissions gatekeeper that
searches a team roster to locate the first available administrative account.
*/
interface Employee {
    name: string;
    role: string;
}

const teamRoster: Employee[] = [
    { name: "John", role: "Developer" },
    { name: "Sarah", role: "Admin" },
    { name: "Mike", role: "Designer" }
];

function findAdmin(team: Employee[]): Employee | undefined {
    return team.find(function (member: Employee): boolean {
        return member.role === "Admin";
    });
}

console.log("Found Administrator:", findAdmin(teamRoster));
console.log("***********************************************");

console.log("Example 04");
/*
Example 4: calculateTotalCart => Accumulating Values with reduceSimulates an e-commerce checkout
calculation that sums up the prices of all items sitting in a shopping cart.
*/
interface CartItem {
    product: string;
    price: number;
}

const runningCart: CartItem[] = [
    { product: "Book", price: 12.99 },
    { product: "Pen", price: 2.50 },
    { product: "Notebook", price: 5.00 }
];

function calculateTotalCart(cart: CartItem[]): number {
    return cart.reduce(function (total: number, item: CartItem): number {
        return total + item.price;
    }, 0); // 0 is the initial value of total
}

console.log("Cart Total: $", calculateTotalCart(runningCart));
console.log("***********************************************");

console.log("Example 05");
/*
Example 5: getHighPrices => Chaining Array OperatorsSimulates a real estate filter displaying
premium listing prices after applying inflation adjustments.
*/
function getPremiumPrices(prices: number[]): number[] {
    return prices
        .map(function (price: number): number {
            return price * 1.1;
        })
        .filter(function (adjustedPrice: number): boolean {
            return adjustedPrice > 100;
        })
}

const startingPrices: number[] = [50, 95, 120, 80];
console.log("Premium Price Tiers:", getPremiumPrices(startingPrices));

//.toFixed(2)


