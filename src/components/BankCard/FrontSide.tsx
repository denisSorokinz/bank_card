import React from "react";
import { BankCardSideProps } from "Entity";
import CardLogoImage from "Assets/images/card_logo.svg";
import { Row, Column } from "Components/Grid";
import { FlipWrapper, Logo, Field } from "./styled";

const FrontSide: React.FC<BankCardSideProps> = ({
    BankCardStateToDisplay,
}) => {
    return (
        <FlipWrapper>
            <Logo src={CardLogoImage} />
            <Row>
                <Column noPaddings>
                    <Field textBold>
                        <Column
                            noPaddings
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <span>{BankCardStateToDisplay.cardNumber}</span>
                        </Column>
                    </Field>
                </Column>
            </Row>
            <Row>
                <Column columnWidth={0.5}>
                    <Field>{BankCardStateToDisplay.ownerName}</Field>
                </Column>
                <Column columnWidth={0.5}>
                    <Field textRight>{BankCardStateToDisplay.expiryDate}</Field>
                </Column>
            </Row>
        </FlipWrapper>
    );
};

export default FrontSide;
