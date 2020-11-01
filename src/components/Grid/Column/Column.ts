import styled, { css } from "styled-components";

interface ColumnProps {
    columnWidth?: number;
    noPaddings?: boolean;
    justifyContent?: string;
    alignItems?: string;
}

const Column = styled.div`
    padding: 0 1rem;
    height: 100%;
    width: ${({ columnWidth: width = 1 }: ColumnProps) => `${width * 100}%`};
    ${({ noPaddings }: ColumnProps) =>
        noPaddings
            ? css`
                  padding: unset;
              `
            : null};
    ${({ justifyContent }: ColumnProps) =>
        justifyContent
            ? css`
                  display: flex;
                  justify-content: ${justifyContent};
              `
            : null};
    ${({ alignItems }: ColumnProps) =>
        alignItems
            ? css`
                  display: flex;
                  align-items: ${alignItems};
              `
            : null};
`;

export default Column;
