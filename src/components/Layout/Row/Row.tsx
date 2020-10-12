import styled, { css } from "styled-components";

interface RowProps {
    className?: string;
    marginBottomBig?: boolean;
}

const Row = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
    margin-bottom: ${({ marginBottomBig }: RowProps) =>
        marginBottomBig ? "3rem" : null};
    display: flex;
    flex-wrap: wrap;
`;

export default Row;
