import styled from "styled-components";
import colors from "Assets/colors";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 50vh;
    padding: 1.5rem 1rem;
    background-color: ${colors.white};
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    overflow-y: scroll;
`;

export default Container;