export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit(value: number) {
    if(!this.validateStatus()) return;

    console.log(`Você depositou R$ ${value}`)
    this.balance += value
  }

  withdraw = (value: number): void => {
    if (this.balance < value || !this.validateStatus()) return;
    console.log(`Você sacou R$ ${value}`)
    this.balance -= value
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
