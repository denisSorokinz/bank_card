import { BankCardFields } from "Constants";
import {
    cardNumberType,
    expiryDateType,
    secureCodeType,
    ownerNameType,
} from "Types";

interface BankCardState {
    // string because we need to display an asterisk "****"
    // if no card number was specified
    [BankCardFields.cardNumber]: cardNumberType | null;
    [BankCardFields.expiryDate]: expiryDateType | null;
    [BankCardFields.secureCode]: secureCodeType | null;
    [BankCardFields.ownerName]: ownerNameType | null;
}

export default BankCardState;
