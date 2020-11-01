import styled, { css } from "styled-components";

interface RowProps {
    minHeight?: string | null;
    justifyContent?: string | null;
    alignItems?: string | null;
    marginTopBig?: boolean | null;
}

const Row = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
    margin-top: ${({ marginTopBig }: RowProps) =>
        marginTopBig ? "3rem" : null};
    min-height: ${({ minHeight = null }: RowProps) => minHeight};
    display: flex;
    justify-content: ${({ justifyContent = null }: RowProps) => justifyContent};
    align-items: ${({ alignItems = null }: RowProps) => alignItems};
    flex-wrap: wrap;
    ${({ minHeight }: RowProps) =>
        minHeight
            ? css`
                  min-height: ${minHeight};
                  height: 0; // for children's height relative to this parent block
              `
            : null};
`;

export default Row;
