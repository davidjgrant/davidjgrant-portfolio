import styled from 'styled-components'

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
