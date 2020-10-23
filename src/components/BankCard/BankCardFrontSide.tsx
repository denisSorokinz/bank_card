import React from "react";
import styled from "styled-components";
import CardLogoImage from "Assets/images/card_logo.svg";
import CardLogo from "./BankCardLogo";
import BankCardField from "./BankCardField";
import { Row, Column } from "Components";
import colors from "Assets/colors";
import { BankCardState } from "Entity";

interface BankCardSideProps {
    BankCardState: BankCardState;
    className?: string;
}

const BankCardFrontSide: React.FC<BankCardSideProps> = ({
    className,
    BankCardState,
}) => {
    return (
        <div className={className}>
            <CardLogo src={CardLogoImage} />
            {/* cardFields.map() loop */}
            <Row>
                <Column noPaddings>
                    <BankCardField cardNumberField>
                        <Column columnSize={1} noPaddings centerContent>
                            <span>{BankCardState.cardNumber}</span>
                        </Column>
                    </BankCardField>
                </Column>
            </Row>
            <Row>
                <Column columnSize={0.5}>
                    <BankCardField>{BankCardState.ownerName}</BankCardField>
                </Column>
                <Column columnSize={0.5}>
                    <BankCardField textRight>
                        {BankCardState.expiryDate}
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
