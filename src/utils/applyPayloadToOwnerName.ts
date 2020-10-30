import { BankCardState } from "Entity";
import { OwnerNameLength, BankCardFields } from "Constants";

const applyPayloadToOwnerName = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { ownerName: currentOwnerName } = stateCopy;
    if (currentOwnerName != null) {
        currentOwnerName =
            payload.toString().length > OwnerNameLength
                ? currentOwnerName
                : payload;
    } else {
        currentOwnerName = payload;
    }
    if (payload == "") currentOwnerName = null;
    return {
        ...state,
        isCardFlipped: false,
        [BankCardFields.ownerName]: currentOwnerName,
    };
};

export default applyPayloadToOwnerName;
