import React from "react";
import styled from "styled-components";
import colors from "Assets/colors";
import CardLogoImage from "Assets/images/card_logo.svg";
import CardLogo from "./BankCardLogo";
import BankCardField from "./BankCardField";
import { Row, Column } from "Components/Layout";

// Create a state container - modify it in "CardDetails" and display here
// Accept an array of inputs, filter by types and render

interface BankCardProps {
    className?: string;
}

const BankCard: React.FC<BankCardProps> = ({ className }) => {
    return (
        <div className={className}>
            <CardLogo src={CardLogoImage} />
            {/* cardFields.map() loop */}
            <Row>
                <Column noPaddings>
                    <BankCardField cardNumberField>
                        <Column size={0.25} noPaddings centerContent>
                            <span>1234</span>
                        </Column>
                        <Column size={0.25} noPaddings centerContent>
                            <span>5174</span>
                        </Column>
                        <Column size={0.25} noPaddings centerContent>
                            <span>5473</span>
                        </Column>
                        <Column size={0.25} noPaddings centerContent>
                            <span>1047</span>
                        </Column>
                    </BankCardField>
                </Column>
            </Row>
            <Row>
                <Column size={0.5}>
                    <BankCardField>Jack Daniels</BankCardField>
                </Column>
                <Column size={0.5}>
                    <BankCardField textRight>05/05</BankCardField>
                </Column>
            </Row>
        </div>
    );
};

const StyledBankCard = styled(BankCard)`
    margin: auto;
    padding: 1.5rem;
    background-color: ${colors.lightPink};
    border-radius: 1rem;
`;

export default StyledBankCard;
