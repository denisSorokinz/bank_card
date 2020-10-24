import { BankCardFields } from "Constants";
import { BankCardState } from "Entity";

const applyPayloadToExpiryDate = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { expiryDate } = stateCopy;
    expiryDate = new Date(payload);
    return {
        ...state,
        [BankCardFields.expiryDate]: expiryDate,
    };
};

export default applyPayloadToExpiryDate;
