import { BankCardFields } from "Constants";

interface BankCardState {
    // string because we need to display an asterisk "****"
    // if no card number was specified
    [BankCardFields.cardNumber]: string;
    [BankCardFields.expiryDate]: string;
    [BankCardFields.secureCode]: string;
    [BankCardFields.ownerName]: string;
}

export default BankCardState;
