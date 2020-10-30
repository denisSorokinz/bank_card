import { BankCardFields } from "Constants";
import { BankCardState } from "Entity";

const applyPayloadToExpiryDate = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { expiryDate: currentExpiryDate } = stateCopy;
    currentExpiryDate = new Date(payload);
    return {
        ...state,
        isCardFlipped: false,
        [BankCardFields.expiryDate]: currentExpiryDate,
    };
};

export default applyPayloadToExpiryDate;
