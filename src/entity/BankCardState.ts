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
    [BankCardFields.cardNumber]: cardNumberType | undefined;
    [BankCardFields.expiryDate]: expiryDateType | undefined;
    [BankCardFields.secureCode]: secureCodeType | undefined;
    [BankCardFields.ownerName]: ownerNameType | undefined;
}

export default BankCardState;
