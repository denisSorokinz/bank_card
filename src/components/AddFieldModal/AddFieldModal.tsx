import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddFieldModalStateContainer } from "Contexts";
import {
    AddFieldForm,
    CloseModalButton,
    SubmitButton,
    ErrorSpan,
} from "./styled";
import { StyledLabel, StyledInput } from "Components/styled";
import { Row, Column } from "Components/Grid";

interface AddFieldFormValues {
    cardFieldName: string;
    cardFieldType: string;
    cardFieldColumnWidth: string;
}

const AddFieldModal: React.FunctionComponent = () => {
    const {
        isAddFieldModalShown,
        toggleIsAddFieldModalShown,
        customFields,
        setCustomFields,
    } = AddFieldModalStateContainer.useContainer();

    const {
        register,
        handleSubmit,
        reset,
        errors,
    } = useForm<AddFieldFormValues>();
    console.log(errors);
    const onSubmit: SubmitHandler<AddFieldFormValues> = ({
        cardFieldName,
        cardFieldType,
        cardFieldColumnWidth,
    }) => {
        setCustomFields([
            ...customFields,
            {
                fieldName: cardFieldName,
                labelText: cardFieldName,
                placeholder: `Enter ${cardFieldName}`,
                type: cardFieldType,
                styleAttributes: {
                    columnWidth: parseFloat(cardFieldColumnWidth) || 1,
                },
            },
        ]);
        toggleIsAddFieldModalShown();
        reset();
    };
    return (
        <AddFieldForm
            isAddFieldModalShown={isAddFieldModalShown}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Column flexDirection="column" alignItems="center">
                <Row justifyContent={"flex-end"} marginBottom={"0"}>
                    <CloseModalButton>+</CloseModalButton>
                </Row>
                <Row>
                    <StyledLabel htmlFor="cardFieldName">
                        Field Name
                    </StyledLabel>
                    <StyledInput
                        ref={register({ required: true })}
                        type="text"
                        name="cardFieldName"
                    />
                    {errors.cardFieldName && (
                        <ErrorSpan>Enter a valid field name</ErrorSpan>
                    )}
                </Row>
                <Row minHeight={"2rem"}>
                    <StyledLabel htmlFor="cardFieldType" marginBottom={"0"}>
                        Field Type
                    </StyledLabel>
                    <select
                        ref={register({ required: true })}
                        name="cardFieldType"
                    >
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="email">Email</option>
                    </select>
                    {errors.cardFieldType && (
                        <ErrorSpan>Choose a field type</ErrorSpan>
                    )}
                </Row>
                <Row>
                    <StyledLabel htmlFor="cardFieldColumnWidth">
                        Column Width
                    </StyledLabel>
                    <StyledInput
                        ref={register({ min: 0.25, max: 1, required: true })}
                        type="number"
                        step={0.01}
                        name="cardFieldColumnWidth"
                    />
                    {errors.cardFieldColumnWidth && (
                        <ErrorSpan>Enter a value from 0 to 1</ErrorSpan>
                    )}
                </Row>
                <Row>
                    <SubmitButton type={"submit"}>Add Field</SubmitButton>
                </Row>
            </Column>
        </AddFieldForm>
    );
};

export default AddFieldModal;
