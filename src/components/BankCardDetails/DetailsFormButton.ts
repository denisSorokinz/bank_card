import styled from "styled-components";
import colors from "Assets/colors";

const DetailsFormButton = styled.button`
    display: block;
    width: 100%;
    margin: auto;
    background-color: ${colors.yellow};
    color: ${colors.black};
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 1rem 0;
    border-radius: .5rem;
`;

export default DetailsFormButton;
