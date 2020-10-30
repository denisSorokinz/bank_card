import { BankCardJsxField, BankCardState } from "Entity";

const getDetailsDisplayValue = (
    cardField: BankCardJsxField,
    state: BankCardState
): string => {
    if (state.expiryDate && cardField.type == "date") {
        const { expiryDate } = state;
        const year = expiryDate.getFullYear();
        const month =
            (expiryDate.getMonth() + 1) < 10
                ? "0" + (expiryDate.getMonth() + 1)
                : (expiryDate.getMonth() + 1);
        console.log(month, expiryDate, expiryDate.getMonth());
        const day =
            expiryDate.getDate() < 10
                ? "0" + expiryDate.getDate()
                : expiryDate.getDate();
        return `${year}-${month}-${day}`;
    }
    return state[cardField.fieldName]
        ? state[cardField.fieldName]!.toString()
        : "";
};

function getLang() {
    if (navigator.languages != undefined) return navigator.languages[0];
    else return navigator.language;
}

export default getDetailsDisplayValue;
