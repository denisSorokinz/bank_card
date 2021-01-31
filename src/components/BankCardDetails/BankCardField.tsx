import React from "react";
import { BankCardJsxFieldCustom } from "Entity";
import { Column } from "Components/Grid";
import { StyledInput, StyledLabel } from "Components/styled";

const BankCardField: React.FC<BankCardJsxFieldCustom> = ({
    fieldName,
    labelText,
    placeholder,
    type,
    styleAttributes,
    value,
    onChange,
}) => {
    return (
        <Column {...styleAttributes} flexDirection={"column"}>
            <StyledLabel htmlFor={fieldName}>{labelText}</StyledLabel>
            <StyledInput
                type={type}
                name={fieldName}
                id={fieldName}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Column>
    );
};

export default BankCardField;
