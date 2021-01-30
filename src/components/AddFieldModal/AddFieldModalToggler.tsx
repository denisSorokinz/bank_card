import React from "react";
import { AddFieldModalStateContainer } from "Contexts";
import { CircleButton } from "Components/styled";
import { StyledComponentClassNameProp } from "Entity";

const ModalToggler: React.FC<StyledComponentClassNameProp> = ({
    className,
    children,
}) => {
    const [
        _,
        toggleIsAddFieldModalShown,
    ] = AddFieldModalStateContainer.useContainer();

    function handleSubmit(ev: React.MouseEvent) {
        ev.preventDefault();
        toggleIsAddFieldModalShown();
    }

    return (
        <CircleButton
            className={className}
            onClick={(ev) => handleSubmit(ev)}
        >
            {children && children}
        </CircleButton>
    );
};

export default ModalToggler;
