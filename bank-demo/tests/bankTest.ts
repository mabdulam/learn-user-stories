import Bank from '../src/bank';

// setup
const bank = new Bank();

// scenario 1: successful account creation
const account = bank.createAccount("John Doe", 29, "2938298");
if (account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

// scenario 2: duplicate account creation
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}

// scenario 3: successful deposit
try {
    bank.deposit("2938298", 100);
    if (account.balance === 100) {
        console.log("Scenario 3 passed");
    } else {
        console.log("Scenario 3 failed");
    }
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 3 failed: " + error.message);
    } else {
        console.log("Scenario 3 failed: Unknown error occurred");
    }
}

// scenario 4: invalid deposit amount (zero or negative)
try {
    bank.deposit("2938298", -50);
    console.log("Scenario 4 failed");
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 4 passed: " + error.message);
    } else {
        console.log("Scenario 4 passed: Unknown error occurred");
    }
}

// scenario 5: deposit to a non-existing account
try {
    bank.deposit("0000000", 100);
    console.log("Scenario 5 failed");
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 5 passed: " + error.message);
    } else {
        console.log("Scenario 5 passed: Unknown error occurred");
    }
}

// scenario 6: successful withdrawal
try {
    bank.withdraw("2938298", 50);
    if (account.balance === 50) {
        console.log("Scenario 6 passed");
    } else {
        console.log("Scenario 6 failed");
    }
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 6 failed: " + error.message);
    } else {
        console.log("Scenario 6 failed: Unknown error occurred");
    }
}

// scenario 7: insufficient funds withdrawal
try {
    bank.withdraw("2938298", 100);
    console.log("Scenario 7 failed");
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 7 passed: " + error.message); // expecting "Insufficient funds"
    } else {
        console.log("Scenario 7 passed: Unknown error occurred");
    }
}

// scenario 8: invalid withdrawal amount (zero or negative)
try {
    bank.withdraw("2938298", -50);
    console.log("Scenario 8 failed");
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 8 passed: " + error.message);
    } else {
        console.log("Scenario 8 passed: Unknown error occurred");
    }
}

// scenario 9: withdrawal from a non-existing account
try {
    bank.withdraw("0000000", 50);
    console.log("Scenario 9 failed");
} catch (error) {
    if (error instanceof Error) {
        console.log("Scenario 9 passed: " + error.message);
    } else {
        console.log("Scenario 9 passed: Unknown error occurred");
    }
}


