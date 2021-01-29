import React from "react";
import BankCardFrontSide from "./FrontSide";
import BankCardBackSide from "./BackSide";
import { CardStateContainer } from "Contexts";
import { getBankCardStateToDisplay } from "Utils";
import { Inner } from "./styled";

const BankCard: React.FC = () => {
    const [cardData, dispatchCardData] = CardStateContainer.useContainer();
    const BankCardStateToDisplay = getBankCardStateToDisplay(cardData);
    return (
        <Inner isCardFlipped={BankCardStateToDisplay.isCardFlipped}>
            <BankCardFrontSide
                BankCardStateToDisplay={BankCardStateToDisplay}
            />
            <BankCardBackSide BankCardStateToDisplay={BankCardStateToDisplay} />
        </Inner>
    );
};

export default BankCard;
