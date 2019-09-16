class Bank {
  constructor(bankName) {
    this.bankName = bankName;
  }
  addAccount(accountName) {
    return `A new ${accountName} account has been open `;
  }
}
class BankAccount extends Bank {
  constructor(bankName, name, surname, accontNumber, balance) {
    super(bankName);
    this.name = name;
    this.surname = surname;
    this.accontNumber = accontNumber;
    this.balance = balance;
  }
  getBalance() {
    if (this.balance > 0) {
      return `Current balance is ${this.balance}`;
    } else {
      return `insufficient funds`;
    }
  }

  makeDeposit(accountType, amount) {
    if (amount > 0 && typeof amount === "number") {
      let x = this.balance + amount;
      return `R${amount} was deposited into ${accountType} account\nThe current balance is R${x}`;
    } else {
      return `Deposit declined into ${accountType} account\nThe current balance is R${this.balance}`;
    }
  }

  transfer(accountType, accountNumber, amount) {
    if (
      typeof accountNumber === "number" &&
      amount > 0 &&
      this.balance >= amount
    ) {
      let x = this.balance - amount;
      return `R${amount} was transfered from ${accountType} to account number ${accountNumber}\nBalance: R${x}`;
    } else {
      return `Transfer declined insufficient funds`;
    }
  }
}
class Savings extends BankAccount {
  getMonthlyBalance(accountType, interest, fee) {
    if (typeof this.accontNumber === "number" && this.balance > 0) {
      let x = this.balance * (interest / 12);
      let monthly = "R" + (this.balance + x - fee).toFixed(3);
      return `Account type: ${accountType}\nBalance: ${monthly}`;
    } else {
      return `Account type: ${accountType}\nBalance: 0.000`;
    }
  }
  withdraw(accountType, amount) {
    if (amount > 0 && typeof amount === "number" && amount < this.balance) {
      let x = this.balance - amount;
      return `R${amount} was withdrawn from ${accountType} account\nThe current balance is R${x}`;
    } else {
      return `Withdrawal declined from ${accountType} account insuficient funds`;
    }
  }
}
class FixedAccount extends BankAccount {
  getMonthlyBalance(interest) {
    if (typeof this.accontNumber === "number" && this.balance > 0) {
      let x = this.balance * (interest / 12);
      let monthly = "R" + (this.balance + x).toFixed(3);
      return `Account type: Fixed account\nBalance: ${monthly}`;
    } else {
      return `Account type: Fixed account\nBalance: 0.000`;
    }
  }
}
var savings = new Savings("FNB", "Tiyiselani", "Rhangani", 123456, 500);
console.log(savings.getMonthlyBalance("savings", 15, 100));
var saving1 = new FixedAccount("FNB", "Tiyiselani", "Rhangani", 123456, 500);
console.log(saving1.getBalance());
var saving = new BankAccount("FNB", "Tiyiselani", "Rhangani", 123456, 500);
console.log(saving);
