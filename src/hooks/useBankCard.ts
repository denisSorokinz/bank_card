import { useReducer } from "react";
import {
    BankCardState,
    ReducerAction,
    ReducerDispatcher,
} from "Entity";
import { BankCardFields, ReducerActions } from "Constants";
import {
    applyPayloadToCardNumber,
    applyPayloadToExpiryDate,
    applyPayloadToSecureCode,
    applyPayloadToOwnerName,
} from "Utils";
const useBankCard = (
    initialState: BankCardState = {
        [BankCardFields.cardNumber]: null,
        [BankCardFields.expiryDate]: null,
        [BankCardFields.secureCode]: null,
        [BankCardFields.ownerName]: null,
        isCardFlipped: false,
    }
): [state: BankCardState, dispatcher: ReducerDispatcher] => {
    // third parameter for lazy load
    let [cardData, setCardData] = useReducer(
        reducer,
        initialState,
        () => initialState
    );
    return [cardData, setCardData];
};

const reducer = (state: BankCardState, action: ReducerAction) => {
    // ! means element exists
    if (action.type in ReducerActions) {
        let modifiedState;
        switch (action.type) {
            case ReducerActions.setCardNumber:
                modifiedState = applyPayloadToCardNumber(
                    state,
                    action.payload
                );
                break;
            case ReducerActions.setExpiryDate:
                modifiedState = applyPayloadToExpiryDate(
                    state,
                    action.payload
                );
                break;
            case ReducerActions.setSecureCode:
                modifiedState = applyPayloadToSecureCode(
                    state,
                    action.payload
                );
                break;
            case ReducerActions.setOwnerName:
                modifiedState = applyPayloadToOwnerName(
                    state,
                    action.payload
                );
                break;
        }
        return modifiedState;
    }
    return state;
};

export default useBankCard;
