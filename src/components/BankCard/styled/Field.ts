import styled, { css } from "styled-components";
import colors from "Assets/colors";

interface FieldProps {
    textBold?: boolean;
    textRight?: boolean;
}

const Field = styled.span<FieldProps>`
    display: block;
    max-width: 100%;
    overflow-wrap: break-word;
    color: ${colors.darkGray};
    text-align: ${({ textRight }) => (textRight ? "right" : null)};
    ${({ textBold: isTextBold }) =>
        isTextBold &&
        css`
            display: flex;
            span {
                font-size: 1.5rem;
                font-family: "inter--bold", sans-serif;
                font-weight: 700;
            }
        `};
`;

export default Field;
