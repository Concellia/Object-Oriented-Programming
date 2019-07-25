describe("Compoud nterest", function(){
    it("should be able to open a new bank account", function(){
        let bankAccount = new Bank("FNB");
        expect(bankAccount.addAccount('savings')).toBe(`A new savings account has been open `)
    })
    it("should return a number if asked for an account number, return a number for the balance and a string for the account type",function(){
        let getDetails = new BankAccount('FNB','Tiyiselani','Rhangani',123456,500);
        expect(typeof(getDetails.bankName)).toBe("string")
        expect(typeof(getDetails.name)).toBe("string")
        expect(typeof(getDetails.surname)).toBe("string")
        expect(typeof(getDetails.accontNumber)).toBe("number")
        expect(typeof(getDetails.balance)).toBe("number")

    })
    it("should be able to get the balance", function(){
        let getBalance = new BankAccount('FNB','Tiyiselani','Rhangani',123456,500);
        expect(getBalance.getBalance()).toBe(`Current balance is 500`)
    })

    it("should be able to calculate the monthly balance with interest for fixed account", function(){
        let getMontlyBalance = new FixedAccount('FNB','Tiyiselani','Rhangani',123456,500);
        expect(getMontlyBalance.getMonthlyBalance(7)).toBe(`Account type: Fixed account\nBalance: R791.667`)
    })
    it("should be able to deposit money into an account", function(){
        let deposit = new BankAccount('FNB','Tiyiselani','Rhangani',123456,500)
        expect(deposit.makeDeposit('Savings',500)).toBe(`R500 was deposited into Savings account\nThe current balance is R1000`)
        expect(deposit.makeDeposit('Savings',0)).toBe(`Deposit declined into Savings account\nThe current balance is R500`)
    })
    it("should be able to withdraw money from an account", function(){
        let withdraw = new Savings('FNB','Tiyiselani','Rhangani',123456,500)
        expect(withdraw.withdraw('Savings',250)).toBe(`R250 was withdrawn from Savings account\nThe current balance is R250`)
        expect(withdraw.withdraw('Savings',20000)).toBe(`Withdrawal declined from Savings account insuficient funds`)
    })
    it("should be able to calculate the monthly balance with interest and monthly fees for savings", function(){
        let getMontlyBalance = new Savings('FNB','Tiyiselani','Rhangani',123456,500);
        expect(getMontlyBalance.getMonthlyBalance('Savings',7,90)).toBe(`Account type: Savings\nBalance: R701.667`)
    })
    it("should be able to transfer money from a account",function(){
        let transfer = new BankAccount('FNB','Tiyiselani','Rhangani',123456,500)
        expect(transfer.transfer('Savings',123456789,250)).toBe("R250 was transfered from Savings to account number 123456789\nBalance: R250")
    })
})