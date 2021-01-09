import styled from "styled-components"

export const HomepageFooterWrapper = styled.div`
    display: flex;
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #bada55;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1;
        grid-row: 2;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 3;
    }
`;