// Indicates the type of all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank 
 */
export default class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account by account number
     * @param {string} accountNumber Account number to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Method to create a new bank account with a unique account number
     * @param {string} name Name of the account holder
     * @param {number} age Age of the account holder
     * @param {string} accountNumber Account number of the account holder
     * @returns Created bank account
     * @throws Error if account already exists
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if(isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Method to deposit money into a bank account
     * @param {string} accountNumber Account number to deposit into
     * @param {number} amount Amount to deposit
     * @throws Error if account not found or invalid amount
     */
    public deposit(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Invalid deposit amount");
        }
        account.balance += amount;
    }

    /**
     * Method to withdraw money from a bank account
     * @param {string} accountNumber Account number to withdraw from
     * @param {number} amount Amount to withdraw
     * @throws Error if account not found, invalid amount, or insufficient funds
     */
    public withdraw(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Invalid withdrawal amount");
        }
        if (account.balance < amount) {
            throw new Error("Insufficient funds");
        }
        account.balance -= amount;
    }

    /**
     * Method to check the balance of a bank account
     * @param {string} accountNumber Account number to check balance for
     * @returns The current balance of the account
     * @throws Error if account not found
     */
    public checkBalance(accountNumber: string): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        return account.balance;
    }
}


