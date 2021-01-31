import React from "react";
import { SubmitButton } from "./styled";
import { Row, Column } from "Components/Grid";
import { CardStateContainer } from "Contexts";
import { BankCardJsxFields } from "Constants";
import { useDetailsRows } from "Hooks";
import BankCardStandardFields from "./BankCardStandardFields";

const BankCardDetails: React.FC = () => {
    const [cardData, dispatchCardData] = CardStateContainer.useContainer();
    let rows = useDetailsRows(BankCardJsxFields);

    return (
        <form method="POST" action="#">
            <BankCardStandardFields
                standardFields={rows}
                cardData={cardData}
                dispatchCardData={dispatchCardData}
            />
            <Row>
                <Column>
                    <SubmitButton type={"submit"}>Pay</SubmitButton>
                </Column>
            </Row>
        </form>
    );
};

export default BankCardDetails;
