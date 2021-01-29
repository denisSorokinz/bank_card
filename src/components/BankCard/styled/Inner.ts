import { BankCardJsxFields } from "Constants";
import styled from "styled-components";

interface InnerProps {
    isCardFlipped: boolean;
}

const Inner = styled.div<InnerProps>`
    margin: auto;
    position: relative;
    width: 90%;
    height: 90%;
    // min-height is calculated dynamically because
    // BankCardFrontSide and BankCardBackSide are position: absolute
    // to achieve a flip effect
    // calculating algorithm: each field needs at least 3 rem of space
    min-height: ${BankCardJsxFields.length * 3}rem;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: ${({ isCardFlipped = false }) =>
        isCardFlipped && "rotateY(-180deg)"};
`;

export default Inner;
