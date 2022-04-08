class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.interest = interest;
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cashCredit) {
        super(id, name, balance);
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.cashCredit = cashCredit;
    }
}
let totalBankBalance = (...accounts) => {
    let totalBalance = 0;
    accounts.forEach((singleAccount) => {
        if (singleAccount.constructor.name === "SavingAccount") {
            totalBalance =
                totalBalance + singleAccount.balance + singleAccount.interest;
        }
        else {
            totalBalance += singleAccount.balance;
            totalBalance -= singleAccount.cashCredit;
        }
    });
    return totalBalance;
};
const account1 = new SavingAccount(123847334, "RG", 40000, 10000);
const account2 = new CurrentAccount(1518600347, "TG", 25000, 10000);
const account3 = new SavingAccount(151860233, "YG", 90000, 2000);
const account4 = new CurrentAccount(151860323, "UG", 40000, 5000);
console.log("Total Balance in Bank is: " +
    totalBankBalance(account1, account2, account3, account4));