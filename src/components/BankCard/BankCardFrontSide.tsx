import React from "react";
import styled from "styled-components";
import CardLogoImage from "Assets/images/card_logo.svg";
import CardLogo from "./BankCardLogo";
import BankCardField from "./BankCardField";
import { Row, Column } from "Components";
import { StyledComponentClassNameProp } from "Entity";
import colors from "Assets/colors";
import { StateContainer } from "Contexts";

const BankCardFrontSide: React.FC<StyledComponentClassNameProp> = ({
    className,
}) => {
    const [cardData, setCardData] = StateContainer.useContainer();
    return (
        <div className={className}>
            <CardLogo src={CardLogoImage} />
            {/* cardFields.map() loop */}
            <Row>
                <Column noPaddings>
                    <BankCardField cardNumberField>
                        <Column columnSize={1} noPaddings centerContent>
                            <span>{cardData.cardNumber}</span>
                        </Column>
                    </BankCardField>
                </Column>
            </Row>
            <Row>
                <Column columnSize={0.5}>
                    <BankCardField>{cardData.ownerName}</BankCardField>
                </Column>
                <Column columnSize={0.5}>
                    <BankCardField textRight>{cardData.expiryDate}</BankCardField>
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