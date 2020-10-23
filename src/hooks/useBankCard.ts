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
    // ! means element exists
    if (action.type in ReducerActions && action.payload.trim() == "") {
        switch (action.type) {
            case ReducerActions.setCardNumber:
                if (state.cardNumber.length == BankCardNumberLength)
                    return state;
                return {
                    ...state,
                    ...{
                        [BankCardFields.cardNumber]: action.payload!,
                    },
                };
            case ReducerActions.setExpiryDate:
                return {
                    ...state,
                    ...{ [BankCardFields.expiryDate]: action.payload! },
                };
            case ReducerActions.setSecureCode:
                return {
                    ...state,
                    ...{ [BankCardFields.secureCode]: action.payload! },
                };
            case ReducerActions.setOwnerName:
                return {
                    ...state,
                    ...{ [BankCardFields.ownerName]: action.payload! },
                };
        }
    }
    return state;
};

export default useBankCard;
