class BankAccount{
    constructor(accontNumber,balance,accountType){
        this.accontNumber = accontNumber;
        this.balance = balance;
        this.accountType = accountType;
    }
    getMonthlyBalance(interest,fee){
        if(typeof(this.accontNumber) === "number" && this.balance > 0){
           let x = (this.balance*(interest/12))
           let monthly = "R"+(this.balance + x - fee).toFixed(3)
           return `Account type: ${this.accountType}\nBalance: ${monthly}`
        }else{
            return `Account type: ${this.accountType}\nBalance: 0.000`
        }
    }
    makeDeposit(amount){
        if(amount > 0 && typeof(amount)==="number"){
            let x = this.balance + amount;
            return `R${amount} was deposited into ${this.accountType} account\nThe current balance is R${x}`
        }
        else{
            return `Deposit declined into ${this.accountType} account\nThe current balance is R${this.balance}`
        }
    }
    withdraw(amount){
        if(amount > 0 && typeof(amount)==="number" && amount < this.balance){
            let x = this.balance - amount;
            return `R${amount} was withdrawn from ${this.accountType} account\nThe current balance is R${x}`
        }
        else{
            return `Withdrawal declined from ${this.accountType} account insuficient funds`
        }
    }
    transfer(accountNumber,amount){
        if(typeof(accountNumber)==="number" && amount>0 && this.balance>=amount){
            let x = this.balance - amount
            return `R${amount} was transfered from ${this.accountType} to account number ${accountNumber}\nBalance: R${x}`
        }
        else{
            return `Transfer declined insufficient funds`
        }
    }
}