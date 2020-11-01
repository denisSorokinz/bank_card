import React from "react";
import styled from "styled-components";
import { StyledComponentClassNameProp } from "Entity";
import BankCardInner from "./BankCardInner";
import BankCardFrontSide from "./BankCardFrontSide";
import BankCardBackSide from "./BankCardBackSide";
import { StateContainer } from "Contexts";
import { getBankCardStateToDisplay } from "Utils";

const BankCard: React.FC<StyledComponentClassNameProp> = ({ className }) => {
    const [cardData, dispatchCardData] = StateContainer.useContainer();
    const BankCardStateToDisplay = getBankCardStateToDisplay(cardData);
    return (
        <div className={className}>
            <BankCardInner>
                <BankCardFrontSide BankCardStateToDisplay={BankCardStateToDisplay} />
                <BankCardBackSide BankCardStateToDisplay={BankCardStateToDisplay} />
            </BankCardInner>
        </div>
    );
};

const StyledBankCard = styled(BankCard)`
    margin: auto;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    perspective: 50rem;
    max-width: 20rem;
    max-height: 12rem;
`;

export default StyledBankCard;
