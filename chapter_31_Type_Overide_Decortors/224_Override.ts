class BaseTest {

    nihit_ready(): void {
        console.log("[BASE] Open browser");
    }

    nihit_done(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {

    override nihit_ready(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override nihit_ready(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
test.nihit_ready();

let apitest = new APITest();
apitest.nihit_ready();
console.log("*****************************************");

//Practice Examples
console.log("Example 01");
class PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing generic payment of $${amount}`);
    }
}

class StripeProcessor extends PaymentProcessor {
    override processPayment(amount: number): void {
        console.log(`[Stripe] Creating payment intent...`);
        console.log(`[Stripe] Charging card via API for $${amount}`);
    }
}

class PayPalProcessor extends PaymentProcessor {
    override processPayment(amount: number): void {
        console.log(`[PayPal] Redirecting user to PayPal login...`);
        console.log(`[PayPal] Verifying token for $${amount}`);
    }
}

const strip = new StripeProcessor();
strip.processPayment(100);

const paypal = new PayPalProcessor();
paypal.processPayment(50);
console.log("*****************************************");

console.log("Example 02");
class AppNotification {
    send(message: string): void {
        console.log(`Notification: ${message}`);
    }
}

class PushNotification extends AppNotification {
    override send(message: string): void {
        console.log(`[Push Notification] Waking up device screen...`);
        console.log(`[Push] Payload: ${message}`);
    }
}

class EmailNotification extends AppNotification {
    override send(message: string): void {
        console.log(`[Email System] Rendering HTML template...`);
        console.log(`[Email] Sending to SMTP server: ${message}`);
    }
}

const push01 = new PushNotification();
push01.send("You have a new message!");

let push02 = new EmailNotification();
push02.send("You have a updated message!")
console.log("*****************************************");

console.log("Example 03");
class DatabaseService {
    connect(): void {
        console.log("Establishing database connection pool...");
    }
}

class PostgresService extends DatabaseService {
    override connect(): void {
        console.log("[PostgreSQL] Opening port 5432...");
        console.log("[PostgreSQL] Running connection handshake...");
    }
}

class MongoService extends DatabaseService {
    override connect(): void {
        console.log("[MongoDB] Parsing cluster connection string...");
        console.log("[MongoDB] Authenticating with database uri...");
    }
}

// Execution
const db01 = new PostgresService();
db01.connect();

const db02 = new MongoService();
db02.connect();
console.log("*****************************************");

console.log("Example 04");
class Character {
    move(): void {
        console.log("Walking forward at standard speed.");
    }
}

class Ninja extends Character {
    override move(): void {
        console.log("[Ninja] Sprinting silently and ignoring obstacles.");
    }
}

class HeavyKnight extends Character {
    override move(): void {
        console.log("[Knight] Moving slowly. Armor creates 20% stamina drain.");
    }
}

// Execution
const player1 = new Ninja();
player1.move();
console.log("*****************************************");

console.log("Example 04");
class BaseLogger {
    logMessage(text: string): void {
        console.log(`[LOG]: ${text}`);
    }
}

class FileLogger extends BaseLogger {
    override logMessage(text: string): void {
        console.log(`[FileLogger] Appending to local /logs/app.txt`);
        console.log(`[Written]: ${text}`);
    }
}

class CloudLogger extends BaseLogger {
    override logMessage(text: string): void {
        console.log(`[CloudLogger] Packaging payload for AWS CloudWatch...`);
        console.log(`[Sent Stream]: ${text}`);
    }
}

// Execution
const logger = new CloudLogger();
logger.logMessage("Critical system error detected.");



