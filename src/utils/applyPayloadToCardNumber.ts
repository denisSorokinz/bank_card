import { CardNumberLength, BankCardFields } from "Constants";
import { BankCardState } from "Entity";

const applyPayloadToCardNumber = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { cardNumber: currentCardNumber } = stateCopy;
    if (currentCardNumber != null) {
        currentCardNumber =
            payload.toString().length > CardNumberLength
                ? currentCardNumber
                : parseInt(payload);
    } else {
        currentCardNumber = parseInt(payload);
    }
    if (payload == "") currentCardNumber = null;
    return {
        ...state,
        isCardFlipped: false,
        [BankCardFields.cardNumber]: currentCardNumber,
    };
};

export default applyPayloadToCardNumber;
