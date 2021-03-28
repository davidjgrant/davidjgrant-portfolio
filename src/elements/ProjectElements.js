import styled from 'styled-components'

export const ProjectContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 10rem 10rem 30rem auto 4rem;
    gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 0.25rem repeat(6, 1fr) 0.25rem;
        grid-template-rows: 10rem 12rem 20rem auto;
    }
`

export const ProjectWrapper = styled.main`
    grid-column: 2 / span 12;
    grid-row: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        margin-top: 1rem;
        color: #08080B;

    }

    hr {
        margin: 3rem 2rem;
        width: 100%;
        color: #f1f1f1;
    }
`

export const ProjectSubTitle = styled.h2`
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
`

export const ProjectHeadingThree = styled.h3`
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
`

export const ProjectImage = styled.img`
    margin: 2rem 0;
`
