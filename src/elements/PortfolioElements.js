import styled from "styled-components"

export const PortfolioWrapper = styled.div`
    height: 100%;
    grid-column: 3;
    grid-row: span 2;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background-color: blue;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2;
        grid-row: 1 span 2;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 2;
    }
`;