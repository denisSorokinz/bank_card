import React from "react";
import {
    Header,
    BankCard,
    BankCardWrapper,
    BankCardDetails,
    BankCardDetailsWrapper,
} from "Components";
import { StateContainer } from "Contexts";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header>Bank Card</Header>
            <StateContainer.Provider>
                <BankCardWrapper>
                    <BankCard />
                </BankCardWrapper>
                <BankCardDetailsWrapper>
                    <BankCardDetails />
                </BankCardDetailsWrapper>
            </StateContainer.Provider>
        </React.Fragment>
    );
};

export default App;
