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

    return (
        <CircleButton
            className={className}
            onClick={(ev) => toggleIsAddFieldModalShown(ev)}
        >
            {children && children}
        </CircleButton>
    );
};

export default ModalToggler;
