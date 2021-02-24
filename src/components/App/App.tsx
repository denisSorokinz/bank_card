import React from "react";
import { CardStateContainer, AddFieldModalStateContainer } from "Contexts";
import {
    Header,
    BankCardContainer,
    BankCardDetailsContainer,
    AddFieldModal,
} from "Components";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header>Bank Card</Header>
            <CardStateContainer.Provider>
                <BankCardContainer />
                <AddFieldModalStateContainer.Provider>
                    <BankCardDetailsContainer />
                    <AddFieldModal />
                </AddFieldModalStateContainer.Provider>
            </CardStateContainer.Provider>
        </React.Fragment>
    );
};

export default App;
