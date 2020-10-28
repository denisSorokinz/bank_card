import { BankCardFields } from "Constants";

interface BankCardStateToDisplay {
    // string because we need to display an asterisk "****"
    // if no card number was specified
    [BankCardFields.cardNumber]: string;
    [BankCardFields.expiryDate]: string;
    [BankCardFields.secureCode]: string;
    [BankCardFields.ownerName]: string;
    isCardFlipped: boolean;
}

export default BankCardStateToDisplay;
