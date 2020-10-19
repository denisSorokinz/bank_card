import { BankCardJsxFields } from 'Constants';
import styled from 'styled-components';

const BankCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    // min-height is calculated dynamically because
    // BankCardFrontSide and BankCardBackSide are position: absolute
    // to achieve a flip effect
    // calculating algorithm: each field needs at least 3 rem of space
    min-height: ${BankCardJsxFields.length * 3}rem;
    &:hover {
        transform: rotateY(-180deg);
    }
`;

export default BankCardInner;