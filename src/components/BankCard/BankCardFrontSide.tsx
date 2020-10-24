import React from "react";
import styled from "styled-components";
import CardLogoImage from "Assets/images/card_logo.svg";
import CardLogo from "./BankCardLogo";
import BankCardField from "./BankCardField";
import { Row, Column } from "Components";
import colors from "Assets/colors";
import { BankCardStateToDisplay } from "Entity";

interface BankCardSideProps {
    BankCardStateToDisplay: BankCardStateToDisplay;
    className?: string;
}

const BankCardFrontSide: React.FC<BankCardSideProps> = ({
    className,
    BankCardStateToDisplay,
}) => {
    return (
        <div className={className}>
            <CardLogo src={CardLogoImage} />
            {/* cardFields.map() loop */}
            <Row>
                <Column noPaddings>
                    <BankCardField cardNumberField>
                        <Column columnSize={1} noPaddings centerContent>
                            <span>{BankCardStateToDisplay.cardNumber}</span>
                        </Column>
                    </BankCardField>
                </Column>
            </Row>
            <Row>
                <Column columnSize={0.5}>
                    <BankCardField>{BankCardStateToDisplay.ownerName}</BankCardField>
                </Column>
                <Column columnSize={0.5}>
                    <BankCardField textRight>
                        {BankCardStateToDisplay.expiryDate}
                    </BankCardField>
                </Column>
            </Row>
        </div>
    );
};

const StyledBankCardFrontSide = styled(BankCardFrontSide)`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: ${colors.lightPink};
    border-radius: 1rem;
`;

export default StyledBankCardFrontSide;
