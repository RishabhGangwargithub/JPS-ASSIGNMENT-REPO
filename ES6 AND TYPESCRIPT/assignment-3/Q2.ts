class Account {
    constructor(public id: number, public name: string, public balance) {
    }
  }
  class SavingAccount extends Account {
    constructor( public id,public name, public balance, public interest: number) {
        super(id,name,balance)
    }
  }
  
  class CurrentAccount extends Account {
    constructor(public id,public name, public balance, public cashCredit: number) {
        super(id,name,balance)
    }
  }
  
  let totalBankBalance = (...accounts) => {
    let totalBalance = 0;
    accounts.forEach((singleAccount) => {
      if (singleAccount.constructor.name === "SavingAccount") {
        totalBalance =
          totalBalance + singleAccount.balance + singleAccount.interest;
      } else {
        totalBalance += singleAccount.balance;
        totalBalance -= singleAccount.cashCredit;
      }
    });
    return totalBalance;
  };
  
  const account1 = new SavingAccount(123847334,"RG",40000,10000);
  const account2 = new CurrentAccount(1518600347, "TG", 25000, 10000);
  const account3 = new SavingAccount(151860233, "YG", 90000, 2000);
  const account4 = new CurrentAccount(151860323, "UG", 40000, 5000);
  
  console.log(
    "Total Balance in Bank is: " +
      totalBankBalance(account1, account2, account3, account4)
    );