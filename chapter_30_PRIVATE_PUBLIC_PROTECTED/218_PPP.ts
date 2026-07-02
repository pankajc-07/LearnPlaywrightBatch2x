class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("GET " + this.baseURL + path);
        console.log("Auth: " + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }
}

class UserAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users (timeout: " + this.timeout + "ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURL);
client.sendRequest("/health");
console.log("**********************************");

class APIClient01 {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader01(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest01(path: string): void {
        console.log("GET " + this.baseURL + path);
        console.log("Auth: " + this.getAuthHeader01());
        console.log("Timeout " + this.timeout + "ms");
    }
}

class UserAPIClient01 extends APIClient01 {
    getUsers01(): void {
        console.log("Fetching users (timeout:" + this.timeout + " ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client01 = new APIClient01("https://api.staging.com", "key_secret_456", 7000);

console.log("Base URL: ", client01.baseURL);
client01.sendRequest01("/health")

