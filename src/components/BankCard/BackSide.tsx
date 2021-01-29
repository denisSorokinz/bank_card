import React from "react";
import colors from "Assets/colors";
import { BankCardSideProps } from "Entity";
import { Row, Column } from "Components/Grid";
import { FlipWrapper, Field, BackSideLine } from "./styled";

const BackSide: React.FC<BankCardSideProps> = ({ BankCardStateToDisplay }) => {
    return (
        <FlipWrapper isFlipped>
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
                    <Field textBold>
                        <span>{BankCardStateToDisplay.secureCode}</span>
                    </Field>
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
        </FlipWrapper>
    );
};

export default BackSide;
