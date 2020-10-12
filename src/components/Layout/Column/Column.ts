import styled, { css } from "styled-components";

interface ColumnProps {
    size?: number;
    noPaddings?: boolean;
    centerContent?: boolean;
}

const Column = styled.div`
    padding: 0 1rem;
    width: ${({ size = 1 }: ColumnProps) => `${size * 100}%`};
    ${({ noPaddings }: ColumnProps) =>
        noPaddings
            ? css`
                  padding: unset;
              `
            : null};
    ${({ centerContent }: ColumnProps) =>
        centerContent
            ? css`
                  display: flex;
                  justify-content: center;
              `
            : null};
`;

export default Column;
