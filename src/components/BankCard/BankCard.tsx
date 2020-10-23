import React from "react";
import styled from "styled-components";
import { StyledComponentClassNameProp } from "Entity";
import BankCardInner from "./BankCardInner";
import BankCardFrontSide from "./BankCardFrontSide";
import BankCardBackSide from "./BankCardBackSide";
import { StateContainer } from "Contexts";
import { getCardNumberWithAsterisks } from "Utils";
import { BankCardFields } from "Constants";

const BankCard: React.FC<StyledComponentClassNameProp> = ({ className }) => {
    const [cardData, dispatchCardData] = StateContainer.useContainer();
    const BankCardNumber = getCardNumberWithAsterisks(cardData.cardNumber);
    const BankCardState = {
        ...cardData,
        [BankCardFields.cardNumber]: BankCardNumber,
    };
    return (
        <div className={className}>
            <BankCardInner>
                <BankCardFrontSide BankCardState={BankCardState} />
                <BankCardBackSide BankCardState={BankCardState} />
            </BankCardInner>
        </div>
    );
};

const StyledBankCard = styled(BankCard)`
    margin: auto;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    perspective: 50rem;
`;

export default StyledBankCard;