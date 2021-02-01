import { ChangeEvent } from "react";
import BankCardJsxFieldGeneric from "./BankCardJsxFieldGeneric";

interface BankCardJsxFieldCustom extends BankCardJsxFieldGeneric {
    fieldName: string;
    value?: string;
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
    reducerActionType?: any;
}

export default BankCardJsxFieldCustom;
