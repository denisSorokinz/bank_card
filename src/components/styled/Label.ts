import styled from "styled-components";
import colors from "Assets/colors";

interface LabelProps {
    marginBottom?: string | null;
}

const Label = styled.label<LabelProps>`
    display: inline-block;
    color: ${colors.darkGreen};
    margin-bottom: ${({ marginBottom = ".75rem" }) => marginBottom};
`;

export default Label;
