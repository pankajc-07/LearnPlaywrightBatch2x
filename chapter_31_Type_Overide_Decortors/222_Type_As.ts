// This is rearly used in Playwright => Type Assertions (as)
let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}

interface elementI {
    tagName: string,
    textContent: string,
    id: string,
    disabled: boolean
};

let button = element as elementI

console.log("Tag:", button.tagName);
console.log("Text:", button.textContent);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);
console.log("*****************************************");

//Practice Examples
console.log("Example 01");
// The Problem: Unstructured data from an API
let apiResponse: unknown = {
    userID: 101,
    token: "abc123",
    role: "admin"
};

interface AuthData {
    userID: string;
    token: number;
    role: "admin" | "user";
}

// The Solution
let session = apiResponse as AuthData;

console.log("Token: ", session.token);
console.log("UserID: ", session.userID);
console.log("Is Admin:", session.role === "admin")
console.log("*****************************************");

console.log("Example 02");
// The Problem: Generic event target from a text input
let eventTarget: unknown = {
    value: "john_doe@example.com",
    name: "email"
}

interface HTMLInputElementAlias {
    value: string;
    name: string;
}

// The Solution
let emailInput = eventTarget as HTMLInputElementAlias;

console.log("Input value: ", emailInput.value);
console.log("Input name: ", emailInput.name);
console.log("*****************************************");

console.log("Example 03");
let parsedStorage: unknown = {
    theme: "light",
    notificationsEnabled: true,
    fontSize: 13
}

interface AppConfig {
    theme: "light" | "dark";
    notificationsEnabled: boolean;
    fontSize: number
}

let userSettings = parsedStorage as AppConfig;

console.log("Theme Mode:", userSettings.theme);
console.log("Font Size:", userSettings.fontSize);
console.log("*****************************************");

console.log("Example 04");
// The Problem: Decoded payload from a JWT utility
let decodedPayload: unknown = {
    sub: "user_1234",
    exp: 123456789,
    permissions: ["read:profile", "write:settings"]
}

interface JWTPayload {
    sub: string;
    exp: number;
    permissions: string[];
}

let tokenData = decodedPayload as JWTPayload;

console.log("User ID:", tokenData.sub);
console.log("Has Write Access:", tokenData.permissions.includes("write:settings"));
console.log("Token:", tokenData.exp);
console.log("*****************************************");

console.log("Example 05");
let incomingMessage: unknown = {
    event: "chat_received",
    payload: {
        sender: "Alice",
        message: "Hey there!"
    }
}

interface ChatMessageEvent {
    event: string;
    payload: {
        sender: string;
        message: string;
    };
}

let chatEvent = incomingMessage as ChatMessageEvent;

console.log("Event Type:", chatEvent.event);
console.log("Message from:", chatEvent.payload.message);
console.log("Message from:", chatEvent.payload.sender);











