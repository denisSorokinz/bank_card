import { BankCardFields } from "Constants";

interface BankCardJsxFieldGeneric {
    type: string;
    fieldName: BankCardFields;
    placeholder: string;
    labelText: string;
    styleAttributes?: {
        columnWidth: number;
    };
}

export default BankCardJsxFieldGeneric;
