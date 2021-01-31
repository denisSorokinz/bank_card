import React from "react";
import { Row } from "Components/Grid";
import { BankCardJsxFieldCustom } from "Entity";
import BankCardField from "./BankCardField";

const BankCardCustomFields: React.FC<{
    customFields: BankCardJsxFieldCustom[];
}> = ({ customFields }) => {
    return (
        <>
            {(customFields.length &&
                customFields.map((field) => {
                    return (
                        <Row key={field.fieldName}>
                            <BankCardField
                                fieldName={field.fieldName}
                                labelText={field.labelText}
                                placeholder={field.placeholder}
                                type={field.type}
                                styleAttributes={field.styleAttributes}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        </Row>
                    );
                })) ||
                null}
        </>
    );
};

export default BankCardCustomFields;
