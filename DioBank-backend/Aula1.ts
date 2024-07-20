import { CompanyAccount } from "./class/CompanyAccount";
import { SavingAccount } from "./class/newAccountType";
import { PeopleAccount } from "./class/PeopleAccount";
//Dio Bank

//name / AccountNumber /
//Deposit / toWithdraw

const newAccount: PeopleAccount = new PeopleAccount(123123, "Thiago", 0.001);
newAccount.Deposit(20);
newAccount.getName()

const account: PeopleAccount = new PeopleAccount(242424, "Nath", 0.002);

const newCompanyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
newCompanyAccount.Deposit(40);


const novaContaPoupanca = new SavingAccount("Thiago", 20)
novaContaPoupanca.Deposit(20)