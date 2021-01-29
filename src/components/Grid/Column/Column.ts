import styled from "styled-components";

interface ColumnProps {
    columnWidth?: number;
    noPaddings?: boolean;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
}

const Column = styled.div<ColumnProps>`
    width: ${({ columnWidth: width = 1 }) => `${width * 100}%`};
    height: 100%;
    padding: ${({ noPaddings = false }) => (noPaddings ? null : "0 1rem")};
    display: ${({ display = null }) => display};
    flex-direction: ${({ flexDirection = null }) =>
        flexDirection};
    justify-content: ${({ justifyContent = null }) =>
        justifyContent};
    align-items: ${({ alignItems = null }) => alignItems};
`;

export default Column;
