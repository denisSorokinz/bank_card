import React from "react";
import { SubmitButton } from "./styled";
import { Row, Column } from "Components/Grid";
import { AddFieldModalStateContainer, CardStateContainer } from "Contexts";
import { BankCardJsxFields } from "Constants";
import { useDetailsRows } from "Hooks";
import BankCardStandardFields from "./BankCardStandardFields";
import BankCardCustomFields from "./BankCardCustomFields";
import { useContainer } from "unstated-next";

const BankCardDetails: React.FC = () => {
    const [cardData, dispatchCardData] = CardStateContainer.useContainer();
    const standardFields = useDetailsRows(BankCardJsxFields);
    const { customFields } = useContainer(AddFieldModalStateContainer);

    return (
        <form method="POST" action="#">
            <BankCardStandardFields
                standardFields={standardFields}
                cardData={cardData}
                dispatchCardData={dispatchCardData}
            />
            <BankCardCustomFields customFields={customFields} />
            <Row marginBottom={"0"}>
                <Column>
                    <SubmitButton type={"submit"}>Pay</SubmitButton>
                </Column>
            </Row>
        </form>
    );
};

export default BankCardDetails;
