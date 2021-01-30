import { Row, Column } from "Components/Grid";
import { StyledLabel, StyledInput } from "Components/styled";
import { BankCardJsxField, BankCardState, ReducerDispatcher } from "Entity";
import React from "react";
import { getDetailsDisplayValue } from "Utils";

const BankCardFields: React.FC<{
    jsxFields: BankCardJsxField[][];
    cardData: BankCardState;
    dispatchCardData: ReducerDispatcher;
}> = ({ jsxFields, cardData, dispatchCardData }) => {
    return (
        <>
            {jsxFields.map((row) => {
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
        </>
    );
};

export default BankCardFields;
