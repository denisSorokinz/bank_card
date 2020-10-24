import { useReducer } from "react";
import { BankCardState, ReducerAction, ReducerDispatcher } from "Entity";
import {
    BankCardFields,
    ReducerActions,
} from "Constants";
import { applyPayloadToCardNumber } from "Utils";

const useBankCard = (
    initialState: BankCardState = {
        [BankCardFields.cardNumber]: undefined,
        [BankCardFields.expiryDate]: undefined,
        [BankCardFields.secureCode]: undefined,
        [BankCardFields.ownerName]: undefined,
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
                const cardNumber = applyPayloadToCardNumber(state.cardNumber!, action.payload);
                return {
                    ...state,
                    ...{
                        [BankCardFields.cardNumber]: cardNumber,
                    },
                };
            // ! Implement other 3 methods and return a valid state
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
