import styled, { css } from "styled-components";
import colors from "Assets/colors";

interface BankCardFieldProps {
    cardNumberField?: boolean;
    textRight?: boolean;
}

const BankCardField = styled.span`
    display: block;
    overflow-wrap: break-word;
    color: ${colors.darkGray};
    text-align: ${({ textRight }: BankCardFieldProps) =>
        textRight ? "right" : null};
    ${({ cardNumberField: isCardNumberField }: BankCardFieldProps) =>
        isCardNumberField &&
        css`
            display: flex;
            span {
                font-size: 1.5rem;
                font-family: "inter--bold", sans-serif;
                font-weight: 700;
            }
        `};
`;

export default BankCardField;
