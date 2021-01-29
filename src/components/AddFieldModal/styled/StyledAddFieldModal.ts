import styled from "styled-components";
import colors from "Assets/colors";
import { AddFieldModalProps } from "Entity";
import { StyledLabel } from "Components/styled";

const StyledAddFieldModal = styled.form<AddFieldModalProps>`
    position: fixed;
    top: 39.5vh;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 60.5vh;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isAddFieldModalShown }) =>
        isAddFieldModalShown ? "translateY(0)" : "translateY(100%)"};
    background-color: ${colors.aquamarine};
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    padding: 1rem;
    touch-action: none;
    label {
        display: block;
        color: ${colors.white};
    }
    ${StyledLabel}[for="cardFieldType"] {
        position: relative;
        top: 25%;
        height: 1rem;
    }
    ${StyledLabel}[for="cardFieldType"],
        ${StyledLabel}[for="cardFieldType"] + select {
        flex-grow: 1;
    }
`;

export default StyledAddFieldModal;
