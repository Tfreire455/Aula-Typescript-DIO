import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, AccountNumber: number) {
    super(name, AccountNumber);
  }

  getLoan = () => {
    console.log("Você fez um empréstimo");
  };

  Deposit = (value: number): any => {
    console.log("A empresa depositou");
    return value;
  };
}
