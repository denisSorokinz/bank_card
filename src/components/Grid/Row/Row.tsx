import styled, { css } from "styled-components";

interface RowProps {
    display?: string;
    justifyContent?: string | null;
    alignItems?: string | null;
    marginTop?: string | null;
    marginBottom?: string | null;
    isFluid?: boolean | null;
    minHeight?: string | null;
}

const Row = styled.div<RowProps>`
    margin-top: ${({ marginTop = null }) => marginTop};
    margin-bottom: ${({ marginBottom = null }) => marginBottom || "1.5rem"};
    min-height: ${({ minHeight = null }) => minHeight};
    width: ${({ isFluid = true }) => isFluid && "100%"};
    ${({ display = "flex", justifyContent = null, alignItems = null }) =>
        display == "flex"
            ? css<RowProps>`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: ${() => justifyContent};
                  align-items: ${() => alignItems};
              `
            : null};
    ${({ minHeight }) =>
        minHeight
            ? css`
                  min-height: ${minHeight};
                  height: 0; // for children's height relative to this parent block
              `
            : null};
`;

export default Row;
