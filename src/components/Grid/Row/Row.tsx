import styled from "styled-components";

interface RowProps {
    marginTopBig?: boolean;
    centerContent?: boolean;
}

const Row = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
    margin-top: ${({ marginTopBig }: RowProps) =>
        marginTopBig ? "3rem" : null};
    display: flex;
    justify-content: ${({ centerContent }: RowProps) =>
        centerContent != null ? "center" : "space-between"};
    flex-wrap: wrap;
`;

export default Row;
