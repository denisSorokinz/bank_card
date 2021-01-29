import React from "react";
import { StyledLabel, StyledInput } from "Components/styled";
import { AddFieldModalStateContainer } from "Contexts";
import { StyledAddFieldModal, SubmitButton } from "./styled";
import { Row, Column } from "Components/Grid";
import CloseAddFieldModalButton from "./CloseModalButton";

const AddFieldModal: React.FunctionComponent = () => {
    const [isAddFieldModalShown] = AddFieldModalStateContainer.useContainer();
    return (
        <StyledAddFieldModal isAddFieldModalShown={isAddFieldModalShown}>
            <Column flexDirection="column" alignItems="center">
                <Row justifyContent={"flex-end"} marginBottom={"0"}>
                    <CloseAddFieldModalButton />
                </Row>
                <Row>
                    <StyledLabel htmlFor="cardFieldName">
                        Field Name
                    </StyledLabel>
                    <StyledInput type="text" name="cardFieldName" />
                </Row>
                <Row minHeight={"2rem"}>
                    <StyledLabel htmlFor="cardFieldType" marginBottom={"0"}>
                        Field Type
                    </StyledLabel>
                    <select name="cardFieldType">
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                    </select>
                </Row>
                <Row>
                    <StyledLabel htmlFor="cardFieldColumnSize">
                        Width (out of 1)
                    </StyledLabel>
                    <StyledInput type="number" name="cardFieldColumnSize" />
                </Row>
                <Row>
                    <SubmitButton type={"submit"}>Add Field</SubmitButton>
                </Row>
            </Column>
        </StyledAddFieldModal>
    );
};

export default AddFieldModal;
