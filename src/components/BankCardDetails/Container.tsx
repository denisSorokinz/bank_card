import React from "react";
import { StyledContainer } from "./styled";
import { AddFieldButton } from "Components";
import BankCardDetails from "./BankCardDetails";

const BankCardDetailsContainer: React.FC = () => (
    <StyledContainer>
        <BankCardDetails />
        <AddFieldButton />
    </StyledContainer>
);

export default BankCardDetailsContainer;
