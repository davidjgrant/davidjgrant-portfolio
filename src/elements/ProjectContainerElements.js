import styled from "styled-components"

export const ProjectContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 10rem 6rem 30rem auto;
    gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 0.25rem repeat(6, 1fr) 0.25rem;
        grid-template-rows: 10rem 6rem 20rem auto;
    }
`