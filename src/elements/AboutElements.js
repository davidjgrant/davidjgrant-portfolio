import styled from "styled-components"

export const AboutWrapper = styled.div`
    height: 100%;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1;
        grid-row: 1;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 1;
    }
`;