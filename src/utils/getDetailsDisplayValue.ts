import { BankCardJsxFieldStandard, BankCardState } from "Entity";
import addZeroIfLessThanTen from "./addZeroIfLessThanTen";

const getDetailsDisplayValue = (
    cardField: BankCardJsxFieldStandard,
    state: BankCardState
): string => {
    if (state.expiryDate && cardField.type == "date") {
        const { expiryDate } = state;
        const year = expiryDate.getFullYear();
        // ? increment because month starts at 0
        const month = addZeroIfLessThanTen(expiryDate.getMonth() + 1);
        const day = addZeroIfLessThanTen(expiryDate.getDate());
        return `${year}-${month}-${day}`;
    }
    return state[cardField.fieldName]
        ? state[cardField.fieldName]!.toString()
        : "";
};

export default getDetailsDisplayValue;
