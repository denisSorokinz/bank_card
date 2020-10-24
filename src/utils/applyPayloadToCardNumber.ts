import { cardNumberType } from "Types";
import { BankCardNumberLength } from "Constants";

const applyPayloadToCardNumber = (
    cardNumber: cardNumberType,
    payload: string
): cardNumberType => {
    return `${cardNumber}`.length == BankCardNumberLength
        ? cardNumber
        : parseInt(`${cardNumber}${payload}`);
};


export default applyPayloadToCardNumber;