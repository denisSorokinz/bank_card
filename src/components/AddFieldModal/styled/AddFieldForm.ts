import styled, { css } from "styled-components";
import colors from "Assets/colors";
import { AddFieldModalProps } from "Entity";
import { StyledLabel } from "Components/styled";

const AddFieldForm = styled.form<AddFieldModalProps>`
    position: fixed;
    top: 39.5vh;
    left: 50%;
    z-index: 2;
    width: 100vw;
    height: 60.5vh;
    transition: transform 0.5s ease-in-out;
    ${({ isAddFieldModalShown }) =>
        isAddFieldModalShown
            ? css`
                  transform: translate(-50%, 0);
                  touch-action: auto;
              `
            : css`
                  transform: translate(-50%, 100%);
                  touch-action: none;
              `};
    background-color: ${colors.aquamarine};
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    padding: 1rem;
    overflow-y: scroll;
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

export default AddFieldForm;
