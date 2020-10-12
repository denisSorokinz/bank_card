import React from "react";
import { Header, BankCard, BankCardContainer, BankCardDetails, BankCardDetailsContainer } from "Components";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header>Bank Card</Header>
            <BankCardContainer>
                <BankCard />
            </BankCardContainer>
            <BankCardDetailsContainer>
                <BankCardDetails />
            </BankCardDetailsContainer>
        </React.Fragment>
    );
};

export default App;
