class BankAccount {
    #balance = 0;
    // private balance = 0;            // private field — hidden from outside

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // this.#balance = this.#balance+ amount;
        }
    }

    getBalance() {
        return this.#balance;  // controlled access
    }
}

const account = new BankAccount();
//account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());

// console.log(account.balance);  // undefined  (no public field by that name)
console.log("**************************************");

console.log("Practice Example 01");
class BankAcc {
    #bal = 0;

    depo(amount) {
        this.#bal = amount;
    }

    getBal() {
        return this.#bal;
    }
}

const acc = new BankAcc();
acc.depo(700);
console.log(acc.getBal());
console.log("**************************************");

console.log("Practice Example 02");
class BankAcc01 {
    #bal01 = 10;

    depo01(amount) {
        this.#bal01 += amount;
    }

    getBal01() {
        return this.#bal01;
    }
}

const acc01 = new BankAcc01();
acc01.depo01(900);
console.log(acc01.getBal01());
