import styled from "styled-components";
import colors from "Assets/colors";
import AddFieldModalToggler from "Components/AddFieldModal/AddFieldModalToggler";

const CloseModalButton = styled(AddFieldModalToggler)`
    && {
        font-size: 2rem;
        color: ${colors.white};
        background-color: transparent;
        transform: rotate(45deg);
    }
`;

export default CloseModalButton;
