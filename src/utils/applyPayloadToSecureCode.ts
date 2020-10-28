import { BankCardState } from "Entity";
import { SecureCodeLength, BankCardFields } from "Constants";

const applyPayloadToSecureCode = (
    state: BankCardState,
    payload: string
): BankCardState => {
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { secureCode } = stateCopy;
    if (secureCode != null) {
        secureCode =
            secureCode.toString().length == SecureCodeLength
                ? secureCode
                : parseInt(payload);
    } else {
        secureCode = parseInt(payload);
    }
    return {
        ...state,
        isCardFlipped: true,
        [BankCardFields.secureCode]: secureCode,
    };
};

export default applyPayloadToSecureCode;
