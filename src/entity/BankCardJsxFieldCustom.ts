import { ChangeEvent } from "react";
import BankCardJsxFieldGeneric from "./BankCardJsxFieldGeneric";

interface BankCardJsxFieldCustom extends BankCardJsxFieldGeneric {
    value: any;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export default BankCardJsxFieldCustom;
