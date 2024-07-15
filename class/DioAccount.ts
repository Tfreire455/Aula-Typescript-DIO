export abstract class DioAccount {
  private readonly name: string;
  private readonly AccountNumber: number;
  balance: number;
  private status: boolean = true;

  constructor(name: string, AccountNumber: number) {
    this.name = name;
    this.AccountNumber = AccountNumber;
    this.balance = 0;
  }

//   setName = (name: string): void => {
//     console.log("Nome alterado com sucesso");
//   };

  getName = (): string => {
    return this.name;
  };

  Deposit = (value: number) => {
    if (this.statusValidate()) {
      console.log("Depósito realizado!");
      return (this.balance += value);
    } else {
      console.error();
    }
  };

  Withdraw = (value: number): any => {
    if (this.statusValidate()) {
      if (value > this.balance) {
        console.log(`Saldo insuficiente!`);
      } else {
        console.log(`Saque de ${value} realizado!`);
        return (this.balance -= value);
      }
    }
  };

  private statusValidate = (): boolean => {
    if (this.status) {
      return this.status;
    } else {
      throw new Error("Conta Inválida");
    }
  };
}
