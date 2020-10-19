import React from "react";
import { BankCardFieldTypes } from "Types";
import { BankCardFields, ReducerActions } from "Constants";
import ReducerAction from "./ReducerAction";
import BankCardState from "./BankCardState";

interface BankCardField {
    type: string;
    fieldName: BankCardFields;
    placeholder: string;
    labelText: string;
    reducerActionType: ReducerActions;
    styleAttributes?: {
        columnSize: number;
    };
    value: BankCardFieldTypes;
    onChange:
        (action: ReducerAction, state: BankCardState) => void;
}

export default BankCardField;
