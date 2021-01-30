import { BankCardFieldTypes } from "Types";
import { BankCardFields, ReducerActions } from "Constants";
import ReducerAction from "./ReducerAction";
import BankCardState from "./BankCardState";

interface BankCardJsxField {
    type: string;
    fieldName: BankCardFields;
    placeholder: string;
    labelText: string;
    reducerActionType: ReducerActions;
    styleAttributes?: {
        columnWidth: number;
    };
    value: BankCardFieldTypes;
    onChange:
        (action: ReducerAction, state: BankCardState) => void;
}

export default BankCardJsxField;
