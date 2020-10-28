import { BankCardState } from "Entity";
import { OwnerNameLength, BankCardFields } from "Constants";

const applyPayloadToOwnerName = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { ownerName } = stateCopy;
    if (ownerName != null) {
        ownerName =
            ownerName.toString().length == OwnerNameLength
                ? ownerName
                : payload;
    } else {
        ownerName = payload;
    }
    return {
        ...state,
        isCardFlipped: false,
        [BankCardFields.ownerName]: ownerName,
    };
};

export default applyPayloadToOwnerName;
