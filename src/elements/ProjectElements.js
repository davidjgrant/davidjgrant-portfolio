import styled from 'styled-components'

export const ProjectContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 10rem 6rem 30rem auto 4rem;
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

export const ProjectWrapper = styled.main`
    grid-column: 2 / span 12;
    grid-row: 4;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }

    p {
        font-size: 1.1rem;
        line-height: 1.5;
        color: #08080B;
    }
`

export const ProjectSubTitle = styled.h2`
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
`

export const ProjectImage = styled.img`
    margin: 2rem 0;

    
`
