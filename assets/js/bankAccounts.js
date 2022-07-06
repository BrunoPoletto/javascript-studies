class BankAccount {
    constructor(agency, number, type) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._moneyAmount = 0;
    }

    get moneyAmount() {
        return this._moneyAmount;
    }

    set moneyAmount(number) {
        this._moneyAmount = number;
    }

    withdraw(money) {
        if (money > this._moneyAmount) {
            return "Transaction denied. Not enough money available.";
        }
        this._moneyAmount = this._moneyAmount - money;
        return this._moneyAmount;
    }

    deposit(money) {
        this._moneyAmount = this._moneyAmount + money;
        return this._moneyAmount;
    }
}

class CheckingsAccount extends BankAccount {
    constructor(agency, number, creditCard) {
        super(agency, number);
        this.type = "checkings";
        this._creditCard = creditCard;
    }

    get creditCard() {
        return this,_creditCard;
    }

    set creditCard(boolean) {
        this._creditCard = boolean;
    }
}

class SavingsAccount extends BankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = "savings";
    }
}

class CollegeAccount extends BankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = "college";
    }

    withdraw(money) {
        if (money > 500) {
            return "Transaction above alloted limit. Please withdraw amounts up to U$ 500.";
        }
        this._moneyAmount = this._moneyAmount - money;
    }
}