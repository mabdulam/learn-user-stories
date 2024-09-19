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
     * Mehtod to find a bank account by account number
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
}