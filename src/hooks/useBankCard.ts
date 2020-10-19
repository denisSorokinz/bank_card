import { useReducer } from "react";
import { BankCardState, ReducerAction, ReducerDispatcher } from "Entity";
import {
    BankCardFields,
    BankCardNumberLength,
    ReducerActions,
} from "Constants";

const useBankCard = (
    initialState: BankCardState = {
        [BankCardFields.cardNumber]: "",
        [BankCardFields.expiryDate]: "",
        [BankCardFields.secureCode]: "",
        [BankCardFields.ownerName]: "",
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
    // ! - element exists
    if (action.type in ReducerActions) {
        switch (action.type) {
            case ReducerActions.setCardNumber:
                if (action.payload.length == BankCardNumberLength) return state;
                return {
                    ...state,
                    ...{
                        [BankCardFields.cardNumber]: action.payload!,
                    },
                };
            default:
                return state;
        }
    }
    return state;
};

export default useBankCard;
