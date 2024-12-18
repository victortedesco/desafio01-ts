import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(50)
console.log(companyAccount)

const bonusAccount: BonusAccount = new BonusAccount('Bonus', 30);
bonusAccount.deposit(100)
bonusAccount.withdraw(50)
console.log(bonusAccount)
