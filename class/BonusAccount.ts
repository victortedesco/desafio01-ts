import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  override deposit = (value: number) => {
    super.deposit(value + 10)
  };
}
