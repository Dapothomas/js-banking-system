// bankAccount.js
// Defines the BankAccount class used by the Simple Banking System.

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Adds money to the account. Rejects non-positive amounts.
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log(`Deposit failed: amount must be a positive number.`);
      return this.balance;
    }
    this.balance += amount;
    console.log(
      `Deposited $${amount.toFixed(2)} to account #${this.accountNumber}. New balance: $${this.balance.toFixed(2)}`
    );
    return this.balance;
  }

  // Removes money from the account, as long as funds are sufficient.
  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log(`Withdrawal failed: amount must be a positive number.`);
      return this.balance;
    }
    if (amount > this.balance) {
      console.log(
        `Withdrawal failed: insufficient funds in account #${this.accountNumber}. Current balance: $${this.balance.toFixed(2)}`
      );
      return this.balance;
    }
    this.balance -= amount;
    console.log(
      `Withdrew $${amount.toFixed(2)} from account #${this.accountNumber}. New balance: $${this.balance.toFixed(2)}`
    );
    return this.balance;
  }

  // Reports the current balance.
  checkBalance() {
    console.log(
      `Account #${this.accountNumber} (${this.accountHolder}) balance: $${this.balance.toFixed(2)}`
    );
    return this.balance;
  }
}

// Support both CommonJS (Node.js) and browser <script> usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = BankAccount;
}
