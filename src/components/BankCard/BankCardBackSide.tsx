import React from "react";
import styled from "styled-components";
import BankCardField from "./BankCardField";
import { Row, Column } from "Components";
import colors from "Assets/colors";
import { BankCardStateToDisplay } from "Entity";

interface BankCardSideProps {
    BankCardStateToDisplay: BankCardStateToDisplay;
    className?: string;
}

const BankCardBackSide: React.FC<BankCardSideProps> = ({
    className,
    BankCardStateToDisplay
}) => {
    return (
        <div className={className}>
            <Row>
                <Column noPaddings>
                    <BankCardField cardNumberField>
                        <Column columnSize={0.25} noPaddings centerContent>
                            <span>{BankCardStateToDisplay.secureCode}</span>
                        </Column>
                    </BankCardField>
                </Column>
            </Row>
        </div>
    );
};

const StyledBankCardBackSide = styled(BankCardBackSide)`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    background-color: ${colors.lightPink};
    border-radius: 1rem;
`;

export default StyledBankCardBackSide;