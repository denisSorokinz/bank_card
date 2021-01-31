import { useReducer } from "react";
import { BankCardState, ReducerAction, ReducerDispatcher } from "Entity";
import {
    BankCardFields,
    BankCardFieldsLength,
    ReducerActions,
} from "Constants";
import {
    applyPayloadToCardNumber,
    applyPayloadToExpiryDate,
    applyPayloadToSecureCode,
    applyPayloadToOwnerName,
} from "Utils";
import BankCard from "Components/BankCard/BankCard";
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

const reducer = (
    state: BankCardState,
    action: ReducerAction
): BankCardState => {
    // ! means element exists
    if (action.type in ReducerActions) {
        let modifiedState = state;
        switch (action.type) {
            case ReducerActions.setCardNumber:
                const { CardNumberLength } = BankCardFieldsLength;
                if (action.payload.length <= CardNumberLength) {
                    modifiedState = applyPayloadToCardNumber(
                        state,
                        action.payload
                    );
                }
                break;
            case ReducerActions.setExpiryDate:
                modifiedState = applyPayloadToExpiryDate(state, action.payload);
                break;
            case ReducerActions.setSecureCode:
                const { SecureCodeLength } = BankCardFieldsLength;
                if (action.payload.length <= SecureCodeLength) {
                    modifiedState = applyPayloadToSecureCode(
                        state,
                        action.payload
                    );
                }
                break;
            case ReducerActions.setOwnerName:
                const { OwnerNameLength } = BankCardFieldsLength;
                if (action.payload.length <= OwnerNameLength) {
                    modifiedState = applyPayloadToOwnerName(
                        state,
                        action.payload
                    );
                }
                break;
        }
        return modifiedState;
    }
    return state;
};

export default useBankCard;
