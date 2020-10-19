import React from "react";
import { BankCardJsxField } from "Entity";
import BankCardFields from "./BankCardFields";
import ReducerActions from "./ReducerActions";

// value and onChange are defined in BankCardDetails.tsx

const BankCardJsxFields = [
    {
        type: "number",
        fieldName: BankCardFields.cardNumber,
        placeholder: "Enter card number",
        labelText: "Card Number",
        reducerActionType: ReducerActions.setCardNumber,
    },
    {
        type: "date",
        fieldName: BankCardFields.expiryDate,
        placeholder: "Enter expiry date",
        labelText: "Expiry Date",
        reducerActionType: ReducerActions.setExpiryDate,
        styleAttributes: {
            columnSize: 0.5,
        },
    },
    {
        type: "number",
        fieldName: BankCardFields.secureCode,
        placeholder: "Enter secure code",
        labelText: "Secure Code",
        reducerActionType: ReducerActions.setSecureCode,
        styleAttributes: {
            columnSize: 0.5,
        },
    },
    {
        type: "text",
        fieldName: BankCardFields.ownerName,
        placeholder: "Enter card owner's name",
        labelText: "Owner's name",
        reducerActionType: ReducerActions.setOwnerName,
    },
] as BankCardJsxField[];

export default BankCardJsxFields;
