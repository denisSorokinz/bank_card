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
    standardFields: BankCardJsxFieldStandard[][];
    cardData: BankCardState;
    dispatchCardData: ReducerDispatcher;
}> = ({ standardFields, cardData, dispatchCardData }) => {
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
            {standardFields.map((row) => {
                let isContentCentered = row.length == 1 ? "center" : null;
                return (
                    <Row
                        key={row[0] && row[0].fieldName}
                        justifyContent={isContentCentered}
                    >
                        {row.map((cardField) => {
                            return (
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
                                // <Column
                                //     {...cardField.styleAttributes}
                                //     key={cardField.fieldName}
                                //     flexDirection={"column"}
                                // >
                                //     <StyledLabel htmlFor={cardField.fieldName}>
                                //         {cardField.labelText}
                                //     </StyledLabel>
                                //     <StyledInput
                                //         type={cardField.type}
                                //         name={cardField.fieldName}
                                //         id={cardField.fieldName}
                                //         placeholder={cardField.placeholder}
                                //         value={getDetailsDisplayValue(
                                //             cardField,
                                //             cardData
                                //         )}
                                //         onChange={(
                                //             ev: React.FormEvent<HTMLInputElement>
                                //         ) => {
                                //             ev.persist();
                                //             dispatchCardData(
                                //                 {
                                //                     type:
                                //                         cardField.reducerActionType,
                                //                     payload:
                                //                         ev.currentTarget.value,
                                //                 },
                                //                 cardData
                                //             );
                                //         }}
                                //     />
                                // </Column>
                            );
                        })}
                    </Row>
                );
            })}
        </>
    );
};

export default BankCardStandardFields;
