import styled from "styled-components";

interface BackSideLineProps {
    lineOpacity?: number;
    backgroundColor: string;
}

const BackSideLine = styled.div`
    opacity: ${({ lineOpacity }: BackSideLineProps) => lineOpacity};
    background-color: ${({ backgroundColor }: BackSideLineProps) =>
        backgroundColor};
    height: 100%;
`;

export default BackSideLine;
