import styled from "styled-components";

interface BackSideLineProps {
    lineOpacity?: number;
    backgroundColor: string;
}

const BackSideLine = styled.div<BackSideLineProps>`
    opacity: ${({ lineOpacity = "1" }) => lineOpacity};
    background-color: ${({ backgroundColor = "black" }) => backgroundColor};
    width: 100%;
    height: 100%;
`;

export default BackSideLine;
