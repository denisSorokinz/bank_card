import React from "react";
import { useContainer } from "unstated-next";
import { SubmitButton } from "./styled";
import { useDetailsRows } from "Hooks";
import { BankCardJsxFieldCustom, BankCardJsxFieldStandard } from "Entity";
import { AddFieldModalStateContainer, CardStateContainer } from "Contexts";
import { BankCardJsxFields } from "Constants";
import BankCardStandardFields from "./BankCardStandardFields";
import BankCardCustomFields from "./BankCardCustomFields";
import { Row, Column } from "Components/Grid";

const BankCardDetails: React.FC = () => {
    const [cardData, dispatchCardData] = CardStateContainer.useContainer();
    const standardJsxFields = useDetailsRows(BankCardJsxFields);

    const { customFields } = useContainer(AddFieldModalStateContainer);
    const customJsxFields = useDetailsRows(customFields);

    return (
        <form method="POST" action="#">
            {standardJsxFields && (
                <BankCardStandardFields
                    standardJsxFields={
                        standardJsxFields as BankCardJsxFieldStandard[][]
                    }
                    cardData={cardData}
                    dispatchCardData={dispatchCardData}
                />
            )}
            {customJsxFields && (
                <BankCardCustomFields
                    customJsxFields={
                        customJsxFields as BankCardJsxFieldCustom[][]
                    }
                />
            )}
            <Row marginBottom={"0"}>
                <Column>
                    <SubmitButton type={"submit"}>Pay</SubmitButton>
                </Column>
            </Row>
        </form>
    );
};

export default BankCardDetails;
