import React from "react";
import styled from "styled-components";
import BankCardField from "./BankCardField";
import BackSideLine from "./BackSideLine";
import { Row, Column } from "Components";
import colors from "Assets/colors";
import { BankCardStateToDisplay } from "Entity";

interface BankCardSideProps {
    BankCardStateToDisplay: BankCardStateToDisplay;
    className?: string;
}

const BankCardBackSide: React.FC<BankCardSideProps> = ({
    className,
    BankCardStateToDisplay,
}) => {
    return (
        <div className={className}>
            <Row minHeight={"2.5rem"}>
                <Column noPaddings>
                    <BackSideLine backgroundColor={colors.black} />
                </Column>
            </Row>
            <Row
                minHeight={"1.75rem"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Column columnWidth={0.7} noPaddings>
                    <BackSideLine
                        backgroundColor={colors.darkGray}
                        lineOpacity={0.75}
                    />
                </Column>
                <Column columnWidth={0.25} noPaddings alignItems={"center"}>
                    <BankCardField textBold>
                        <span>{BankCardStateToDisplay.secureCode}</span>
                    </BankCardField>
                </Column>
            </Row>
            <Row minHeight={"1.25rem"}>
                <Column noPaddings>
                    <BackSideLine
                        backgroundColor={colors.gray}
                        lineOpacity={0.5}
                    />
                </Column>
            </Row>
        </div>
    );
};

const StyledBankCardBackSide = styled(BankCardBackSide)`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1.5rem 0;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    background-color: ${colors.lightPink};
    border-radius: 1rem;
`;

export default StyledBankCardBackSide;
