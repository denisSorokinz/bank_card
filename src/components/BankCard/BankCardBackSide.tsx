import React from "react";
import styled from "styled-components";
import BankCardField from "./BankCardField";
import { Row, Column } from "Components";
import { StyledComponentClassNameProp } from "Entity";
import colors from "Assets/colors";

const BankCardBackSide: React.FC<StyledComponentClassNameProp> = ({
    className,
}) => {
    return (
        <div className={className}>
            <Row>
                <Column noPaddings>
                    <BankCardField cardNumberField>
                        <Column columnSize={0.25} noPaddings centerContent>
                            <span>1234</span>
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