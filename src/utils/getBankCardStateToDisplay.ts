import { BankCardState, BankCardStateToDisplay } from "Entity";
import { BankCardFields } from "Constants";
import getCardNumberToDisplay from "./getCardNumberToDisplay";
import getCardExpiryDateToDisplay from "./getCardExpiryDateToDisplay";

const getBankCardStateToDisplay = (
    state: BankCardState
): BankCardStateToDisplay => {
    let { cardNumber, expiryDate, secureCode, ownerName } = state;
    const cardNumberToDisplay = getCardNumberToDisplay(cardNumber);
    const expiryDateToDisplay = getCardExpiryDateToDisplay(expiryDate);
    const secureCodeToDisplay = secureCode ? secureCode.toString() : "";
    const ownerNameToDisplay = ownerName ? ownerName : "";
    return {
        [BankCardFields.cardNumber]: cardNumberToDisplay,
        [BankCardFields.expiryDate]: expiryDateToDisplay,
        [BankCardFields.secureCode]: secureCodeToDisplay,
        [BankCardFields.ownerName]: ownerNameToDisplay,
        isCardFlipped: state.isCardFlipped,
    };
};

export default getBankCardStateToDisplay;
