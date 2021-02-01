import React from "react";
import { Row } from "Components/Grid";
import { BankCardJsxFieldCustom } from "Entity";
import BankCardField from "./BankCardField";

const BankCardCustomFields: React.FC<{
    customJsxFields: BankCardJsxFieldCustom[][];
}> = ({ customJsxFields }) => {
    return (
        <>
            {customJsxFields.map((row) => {
                let justifyContent = row.length == 1 ? "center" : "space-evenly";
                console.log(row);
                return (
                    <Row
                        key={row[0] && row[0].fieldName}
                        justifyContent={justifyContent}
                    >
                        {row.map((cardField) => (
                            <BankCardField
                                key={cardField.fieldName}
                                fieldName={cardField.fieldName}
                                labelText={cardField.labelText}
                                placeholder={cardField.placeholder}
                                type={cardField.type}
                                styleAttributes={cardField.styleAttributes}
                            />
                        ))}
                    </Row>
                );
            })}
        </>
    );
};

export default BankCardCustomFields;
