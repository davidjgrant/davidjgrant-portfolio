import styled from "styled-components"

export const AboutInfoWrapper = styled.div`
    grid-column: 1;
    grid-row: span 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    padding: 0 2rem;

    @media ${props => props.theme.breakpoints.wide} {
        grid-column: 2;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1;
        grid-row: 1;
        width: 100%;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 1;
        
    }
`

export const AboutInfo = styled.p`
    color: red;
`