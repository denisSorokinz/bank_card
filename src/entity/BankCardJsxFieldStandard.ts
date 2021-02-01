import BankCardJsxFieldGeneric from "./BankCardJsxFieldGeneric";
import { BankCardFieldTypes } from "Types";
import { BankCardFields, ReducerActions } from "Constants";
import ReducerAction from "./ReducerAction";
import BankCardState from "./BankCardState";

interface BankCardJsxFieldStandard extends BankCardJsxFieldGeneric {
    fieldName: BankCardFields;
    value: BankCardFieldTypes;
    onChange: (action: ReducerAction, state: BankCardState) => void;
    reducerActionType: ReducerActions;
}

export default BankCardJsxFieldStandard;
