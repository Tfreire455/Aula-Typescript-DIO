import { DioAccount } from "./DioAccount";

export class SavingAccount extends DioAccount {
  constructor(name: string, AccountNumber: number) {
    super(name, AccountNumber);
    this.balance = 0;
  }
  Deposit = (value: number): number => {
    console.log(
      `Você depositou ${value}, seu saldo é de ${(this.balance += value + 10)}`
    );
    return (this.balance += value + 10);
  };
}
