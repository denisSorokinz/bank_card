import React from "react";
import styled from "styled-components";
import DetailsForm from "./DetailsForm";
import DetailsFormLabel from "./DetailsFormLabel";
import DetailsFormInput from "./DetailsFormInput";
import DetailsFormButton from "./DetailsFormButton";
import { Row, Column } from "Components/Layout";

const BankCardDetails: React.FC = () => {
    return (
        <DetailsForm method="POST" action="#">
            <Row>
                <Column>
                    <DetailsFormLabel htmlFor="cardNumber">
                        Card Number
                    </DetailsFormLabel>
                    <DetailsFormInput
                        type="number"
                        name="cardNumber"
                        id="cardNumber"
                        placeholder="Enter card number"
                    />
                </Column>
            </Row>
            <Row>
                <Column size={0.5}>
                    <DetailsFormLabel htmlFor="cardExpiryDate">
                        Expiry date
                    </DetailsFormLabel>
                    <DetailsFormInput
                        type="date"
                        name="cardExpiryDate"
                        id="cardExpiryDate"
                        placeholder="Enter expiry date"
                    />
                </Column>
                <Column size={0.5}>
                    <DetailsFormLabel htmlFor="cardSecureCode">
                        Secure Code
                    </DetailsFormLabel>
                    <DetailsFormInput
                        type="number"
                        name="cardSecureCode"
                        id="cardSecureCode"
                        placeholder="Enter secure code"
                    />
                </Column>
            </Row>
            <Row marginBottomBig>
                <Column>
                    <DetailsFormLabel htmlFor="cardOwnerName">
                        Name on card
                    </DetailsFormLabel>
                    <DetailsFormInput
                        type="text"
                        name="cardOwnerName"
                        id="cardOwnerName"
                        placeholder="Enter card owner's name"
                    />
                </Column>
            </Row>
            <Row>
                <Column>
                    <DetailsFormButton>Pay</DetailsFormButton>
                </Column>
            </Row>
        </DetailsForm>
    );
};

const StyledBankCardDetails = styled(BankCardDetails)``;

export default StyledBankCardDetails;
