describe("Compoud nterest", function(){
    it("should return a number if asked for an account number, return a number for the balance and a string for the account type",function(){
        let getDetails = new BankAccount(123456789123,10000,"Savings");
        expect(typeof(getDetails.accontNumber)).toBe("number")
        expect(typeof(getDetails.balance)).toBe("number")
        expect(typeof(getDetails.accountType)).toBe("string")

    })
    it("should be able to calculate the monthly balance with interest and monthly fees", function(){
        let getMontlyBalance = new BankAccount(123456789123,10000,"Savings");
        expect(getMontlyBalance.getMonthlyBalance(7,47)).toBe(`Account type: Savings\nBalance: R15786.333`)
    })
    it("should be able to deposit money into an account", function(){
        let deposit = new BankAccount(123456789123,10000,"Savings")
        expect(deposit.makeDeposit(500)).toBe(`R500 was deposited into Savings account\nThe current balance is R10500`)
        expect(deposit.makeDeposit(0)).toBe(`Deposit declined into Savings account\nThe current balance is R10000`)
    })
    it("should be able to withdraw money from an account", function(){
        let withdraw = new BankAccount(123456789123,10000,"Savings")
        expect(withdraw.withdraw(500)).toBe(`R500 was withdrawn from Savings account\nThe current balance is R9500`)
        expect(withdraw.withdraw(20000)).toBe(`Withdrawal declined from Savings account insuficient funds`)
    })
    it("should be able to transfer money from",function(){
        let transfer = new BankAccount(123456789123,10000,"Savings")
        expect(transfer.transfer(123456789,500)).toBe("R500 was transfered from Savings to account number 123456789\nBalance: R9500")
    })
})