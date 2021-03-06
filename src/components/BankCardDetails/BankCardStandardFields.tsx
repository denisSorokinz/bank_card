import { Row } from "Components/Grid";
import { ReducerActions } from "Constants";
import {
    BankCardJsxFieldStandard,
    BankCardState,
    ReducerDispatcher,
} from "Entity";
import React from "react";
import { getDetailsDisplayValue } from "Utils";
import BankCardField from "./BankCardField";

const BankCardStandardFields: React.FC<{
    standardJsxFields: BankCardJsxFieldStandard[][];
    cardData: BankCardState;
    dispatchCardData: ReducerDispatcher;
}> = ({ standardJsxFields, cardData, dispatchCardData }) => {
    function handleChange(
        ev: React.FormEvent<HTMLInputElement>,
        reducerActionType: ReducerActions,
        cardData: BankCardState
    ) {
        ev.persist();
        dispatchCardData(
            {
                type: reducerActionType,
                payload: ev.currentTarget.value,
            },
            cardData
        );
    }

    return (
        <>
            {standardJsxFields.map((row) => {
                let isContentCentered = row.length == 1 ? "center" : null;
                return (
                    <Row
                        key={row[0] && row[0].fieldName}
                        justifyContent={isContentCentered}
                    >
                        {row.map((cardField) => (
                            <BankCardField
                                key={cardField.fieldName}
                                fieldName={cardField.fieldName}
                                labelText={cardField.labelText}
                                placeholder={cardField.placeholder}
                                type={cardField.type}
                                styleAttributes={cardField.styleAttributes}
                                value={getDetailsDisplayValue(
                                    cardField,
                                    cardData
                                )}
                                onChange={(ev) =>
                                    handleChange(
                                        ev,
                                        cardField.reducerActionType,
                                        cardData
                                    )
                                }
                            />
                        ))}
                    </Row>
                );
            })}
        </>
    );
};

export default BankCardStandardFields;
