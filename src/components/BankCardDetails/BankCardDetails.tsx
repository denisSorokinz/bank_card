import React from "react";
import DetailsForm from "./DetailsForm";
import DetailsFormLabel from "./DetailsFormLabel";
import DetailsFormInput from "./DetailsFormInput";
import DetailsFormButton from "./DetailsFormButton";
import { Row, Column } from "Components";
import { StateContainer } from "Contexts";
import { BankCardJsxFields, BankCardFields } from "Constants";
import { useDetailsRows } from "Hooks";
import { getDetailsDisplayValue } from "Utils";

const BankCardDetails: React.FC = () => {
    const [cardData, dispatchCardData] = StateContainer.useContainer();
    let rows = useDetailsRows(BankCardJsxFields);

    return (
        <DetailsForm method="POST" action="#">
            {rows.map((row, index) => {
                let isContentCentered =
                    row.length == 1 ? "centerContent" : null;
                return (
                    <Row
                        key={row[0] && row[0].fieldName}
                        {...isContentCentered}
                    >
                        {row.map((cardField) => {
                            return (
                                <Column
                                    {...cardField.styleAttributes}
                                    key={cardField.fieldName}
                                >
                                    <DetailsFormLabel
                                        htmlFor={cardField.fieldName}
                                    >
                                        {cardField.labelText}
                                    </DetailsFormLabel>
                                    <DetailsFormInput
                                        type={cardField.type}
                                        name={cardField.fieldName}
                                        id={cardField.fieldName}
                                        placeholder={cardField.placeholder}
                                        // pattern={
                                        //     cardField.type == "datetime-local"
                                        //         ? "d{1,2}/d{1,2}/d{4}"
                                        //         : undefined
                                        // }
                                        value={getDetailsDisplayValue(
                                            cardField,
                                            cardData
                                        )}
                                        onChange={(
                                            ev: React.FormEvent<
                                                HTMLInputElement
                                            >
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
            <Row marginTopBig>
                <Column>
                    <DetailsFormButton>Pay</DetailsFormButton>
                </Column>
            </Row>
        </DetailsForm>
    );
};

export default BankCardDetails;
