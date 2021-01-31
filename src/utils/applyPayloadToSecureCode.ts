import { BankCardState } from "Entity";
import { BankCardFieldsLength, BankCardFields } from "Constants";

const applyPayloadToSecureCode = (
    state: BankCardState,
    payload: string
): BankCardState => {
    const { SecureCodeLength } = BankCardFieldsLength;
    // * Copy state in case if the target value is not primitive
    const stateCopy = Object.assign({}, state);
    let { secureCode: currentSecureCode } = stateCopy;
    if (currentSecureCode != null) {
        currentSecureCode =
            payload.toString().length > SecureCodeLength
                ? currentSecureCode
                : parseInt(payload);
    } else {
        currentSecureCode = parseInt(payload);
    }
    if (payload == "") currentSecureCode = null;
    return {
        ...state,
        isCardFlipped: true,
        [BankCardFields.secureCode]: currentSecureCode,
    };
};

export default applyPayloadToSecureCode;
