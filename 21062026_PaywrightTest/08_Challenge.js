// Test Environment Config

function questionName(input) {
    // ADD YOUR CODE HERE
    // Convert input to lowercase to make the switch condition case-insensitive
    const envName = String(input).toLowerCase();

    // const: Use fixed values for common elements like the base domain
    const DOMAIN = "testingacademy.com";

    // let: Use for variables that will be dynamically assigned inside the switch blocks
    let displayEnv = "";
    let baseUrl = "";
    let apiKey = "";
    let timeout = "";
    let description = "";

    switch (envName) {
        case "dev":
            displayEnv = "DEV";
            baseUrl = `https://dev-api.${DOMAIN}`;
            apiKey = "dev_key_xxxx-xxxx";
            timeout = "3000ms";
            description = "Development - Sandbox environment for feature verification";
            break;

        case "qa":
            displayEnv = "QA";
            baseUrl = `https://qa-api.${DOMAIN}`;
            apiKey = "qa_key_xxxx-xxxx";
            timeout = "5000ms";
            description = "QA - Quality assurance and regression testing zone";
            break;

        case "staging":
            displayEnv = "STAGING";
            baseUrl = `https://staging-api.${DOMAIN}`;
            apiKey = "stg_key_xxxx-xxxx";
            timeout = "8000ms";
            description = "Staging - Pre-production mirror";
            break;

        // Fall-through logic to handle both "production" and "prod" triggers equivalently
        case "production":
        case "prod":
            displayEnv = "PRODUCTION";
            baseUrl = `https://api.${DOMAIN}`;
            apiKey = "prod_key_live-xxxx";
            timeout = "10000ms";
            description = "Production - Live customer-facing environment";
            break;

        default:
            displayEnv = "INVALID";
            baseUrl = "N/A";
            apiKey = "N/A";
            timeout = "0ms";
            description = "Error: Unrecognized or unconfigured test environment target";
            break;
    }

    // Assemble the finalized configuration into the strict output format required
    let answer = `Environment: ${displayEnv} Base URL: ${baseUrl} API Key: ${apiKey} Timeout: ${timeout} Description: ${description}`;

    return answer;
}

