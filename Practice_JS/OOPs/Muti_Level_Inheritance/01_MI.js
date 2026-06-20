// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }
    open() {
        console.log("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin panel");
    }
    manageUsers() {
        console.log("[ADMIN] managing users");
    }
}

let admin = new AdminPage();

admin.open();
admin.login("SuperAdmin");
admin.manageUsers();
