import React from "react";
import { CardStateContainer, AddFieldModalStateContainer } from "Contexts";
import {
    Header,
    BankCardContainer,
    BankCardDetailsContainer,
    AddFieldModal,
    AddFieldButton,
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
                    <AddFieldButton />
                </AddFieldModalStateContainer.Provider>
            </CardStateContainer.Provider>
        </React.Fragment>
    );
};

export default App;
