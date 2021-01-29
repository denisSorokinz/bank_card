import React from "react";
import { SubmitButton } from "./styled";
import { Row, Column } from "Components/Grid";
import { StyledLabel, StyledInput } from "Components/styled";
import { CardStateContainer } from "Contexts";
import { BankCardJsxFields } from "Constants";
import { useDetailsRows } from "Hooks";
import { getDetailsDisplayValue } from "Utils";

const BankCardDetails: React.FC = () => {
    const [cardData, dispatchCardData] = CardStateContainer.useContainer();
    let rows = useDetailsRows(BankCardJsxFields);

    return (
        <form method="POST" action="#">
            {rows.map((row) => {
                let isContentCentered = row.length == 1 ? "center" : null;
                return (
                    <Row
                        key={row[0] && row[0].fieldName}
                        justifyContent={isContentCentered}
                    >
                        {row.map((cardField) => {
                            return (
                                <Column
                                    {...cardField.styleAttributes}
                                    key={cardField.fieldName}
                                    flexDirection={"column"}
                                >
                                    <StyledLabel htmlFor={cardField.fieldName}>
                                        {cardField.labelText}
                                    </StyledLabel>
                                    <StyledInput
                                        type={cardField.type}
                                        name={cardField.fieldName}
                                        id={cardField.fieldName}
                                        placeholder={cardField.placeholder}
                                        value={getDetailsDisplayValue(
                                            cardField,
                                            cardData
                                        )}
                                        onChange={(
                                            ev: React.FormEvent<HTMLInputElement>
                                        ) => {
                                            ev.persist();
                                            dispatchCardData(
                                                {
                                                    type:
                                                        cardField.reducerActionType,
                                                    payload:
                                                        ev.currentTarget.value,
                                                },
                                                cardData
                                            );
                                        }}
                                    />
                                </Column>
                            );
                        })}
                    </Row>
                );
            })}
            <Row marginTop={"3rem"}>
                <Column>
                    <SubmitButton type={"submit"}>Pay</SubmitButton>
                </Column>
            </Row>
        </form>
    );
};

export default BankCardDetails;
