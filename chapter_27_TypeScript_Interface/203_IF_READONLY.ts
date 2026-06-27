interface APIReponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responTime?: number
}

// readOnly
// Readonly - can't modify the readonly

// ? - optional

let response: APIReponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

// response.statusCode = 404;
response.body = "dasdadas";
console.log("***********************************************");

//Practice Examples
console.log("Example 01");
/*
Example 1: UserAccount => User Profiles with Readonly IDsSimulates a user management database record
where structural identifiers cannot be mutated after creation.
*/
interface UserAccount {
    readonly id: number;
    username: string;
    nickname?: string;
}

let profile: UserAccount = {
    id: 700,
    username: "Pankaj"
}

console.log("User ID: ", profile.id);
console.log("User name: ", profile.username);
console.log("User ID: ", profile.nickname);

// profile.id = 1111; // Error: Cannot assign to 'id' because it is a read-only property.

profile.username = "Virat";
console.log("User name: ", profile.username);
console.log("***********************************************");

console.log("Example 02");
/*
Example 2: DatabaseConfig => Configuration ManagementSimulates a infrastructure configuration manager
that injects default fallback values when non-mandatory parameters are omitted.
*/
interface DatabaseConfig {
    readonly host: string;
    port: number;
    password?: string;
    ssl?: boolean;
}

let dbSettings: DatabaseConfig = {
    host: "localhost",
    port: 8080
}

console.log("Host Connection:", dbSettings.host);
console.log("Port:", dbSettings.port);
console.log("SSL Enabled:", dbSettings.ssl); // Output: undefined

//dbSettings.host = "Master";

dbSettings.port = 7070;
console.log("Port:", dbSettings.port);

dbSettings.ssl = true;
console.log("SSL Enabled:", dbSettings.ssl);
console.log("***********************************************");

console.log("Example 03");
/*
Example 3: ProductItem => Inventory StructuresSimulates an e-commerce inventory ledger tracking
active merchandise, stock listings, and promotional updates.
*/
interface ProductItem {
    readonly sku: string;
    title: string;
    price: number;
    tags?: string[];
}

let laptop: ProductItem = {
    sku: "LAP-8801-X",
    title: "Pro Book 15",
    price: 1299.99,
    tags: ["electronics", "work-from-home"]
}

console.log("SKU Code:", laptop.sku);
console.log("Item Price:", laptop.price);
console.log("Search Tags:", laptop.tags); // Output: ["electronics", "work-from-home"]

laptop.tags = ["devices", "WFH"];
console.log("Search Tags:", laptop.tags);
console.log("***********************************************");

console.log("Example 04");
/*
Example 4: LogEntry => System DiagnosticsSimulates a centralized telemetry processor formatting
standard error details alongside trace metrics.
*/
interface LogEntry {
    readonly timestamp: number;
    message: string;
    metadata?: object;
}

let errorLog: LogEntry = {
    timestamp: 1719511731000,
    message: "Failed to allocate memory heap pool."
};

console.log("Time Unix:", errorLog.timestamp);
console.log("Alert Message:", errorLog.message);
console.log("Meta Attachments:", errorLog.metadata); // Output: undefined
console.log("***********************************************");

console.log("Example 05");
/*
Example 5: HttpRequest => Networking PayloadsSimulates an HTTP pipeline wrapper passing down
transmission parameters to outgoing gateway requests.
*/
interface HttpRequest {
    url: string;
    method: string;
    body?: any;
    timeoutMs?: number;
}

let getRequest: HttpRequest = {
    url: "https://api.github.com/users",
    method: "GET"
}

console.log("Target Destination:", getRequest.url);
console.log("HTTP Verb:", getRequest.method);
console.log("Payload Content:", getRequest.body); // Output: undefined
console.log("Timeout is :", getRequest.timeoutMs); // Output: undefined

getRequest.body = "MasterServer";
getRequest.timeoutMs = 5000;

console.log("Payload Content:", getRequest.body);
console.log("Timeout is :", getRequest.timeoutMs);
