import { CardNumberLength, BankCardFields } from "Constants";
import { BankCardState } from "Entity";

const applyPayloadToCardNumber = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { cardNumber } = stateCopy;
    if (cardNumber != null) {
        cardNumber =
            cardNumber.toString().length == CardNumberLength
                ? cardNumber
                : parseInt(payload);
        console.log(cardNumber, payload);
    } else {
        cardNumber = parseInt(payload);
    }
    return {
        ...state,
        isCardFlipped: false,
        [BankCardFields.cardNumber]: cardNumber,
    };
};

export default applyPayloadToCardNumber;
