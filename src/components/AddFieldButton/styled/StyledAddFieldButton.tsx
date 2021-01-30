import styled from "styled-components";
import colors from "Assets/colors";
import AddFieldModalToggler from "Components/AddFieldModal/AddFieldModalToggler";

const StyledAddFieldButton = styled(AddFieldModalToggler)`
    position: fixed;
    z-index: 1;
    right: 1rem;
    bottom: 1rem;
    color: ${colors.white};
    background-color: ${colors.aquamarine};
    opacity: 0.75;
    transition: opacity 0.05s ease-in-out;
    &:active {
        opacity: 1;
    }
`;

export default StyledAddFieldButton;
