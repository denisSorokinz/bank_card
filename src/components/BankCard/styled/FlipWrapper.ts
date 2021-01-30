import styled from "styled-components";
import colors from "Assets/colors";

interface FlipWrapperProps {
    isFlipped?: boolean;
}

const FlipWrapper = styled.div<FlipWrapperProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5vmin;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; /* Safari */
    transform: ${({ isFlipped = false }) => isFlipped && "rotateY(-180deg)"};
    background-color: ${colors.lightPink};
    border-radius: 1rem;
`;

export default FlipWrapper;
