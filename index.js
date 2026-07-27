// index.js
// Entry point that demonstrates the BankAccount class in action.

// Works in both environments without ever redeclaring `BankAccount`:
// - In Node.js, `module` exists, so we require the class from bankAccount.js.
// - In the browser, `module` is undefined, so we fall back to the global
//   `BankAccount` class already defined by the <script src="bankAccount.js">
//   tag loaded before this file.
const AccountClass =
  typeof module !== "undefined" && module.exports
    ? require("./bankAccount")
    : BankAccount;

console.log("=== Simple Banking System ===\n");

// Create a couple of accounts.
const account1 = new AccountClass(1001, "Alice Johnson", 500);
const account2 = new AccountClass(1002, "Brian Smith", 150);

console.log("--- Initial Balances ---");
account1.checkBalance();
account2.checkBalance();

console.log("\n--- Deposits ---");
account1.deposit(200);
account2.deposit(50);

console.log("\n--- Withdrawals ---");
account1.withdraw(100);
account2.withdraw(1000); // Should fail: insufficient funds

console.log("\n--- Invalid Amounts ---");
account1.deposit(-50); // Should fail: negative amount
account2.withdraw(0); // Should fail: zero amount

console.log("\n--- Final Balances ---");
account1.checkBalance();
account2.checkBalance();