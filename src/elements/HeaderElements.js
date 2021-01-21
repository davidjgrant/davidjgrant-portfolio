import styled from 'styled-components'

export const HeaderWrapper = styled.main`
    display: grid;
    grid-column: 2 / span 12;
    grid-row: 2;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
        grid-column: 1 / span 7;
    }
`

export const HeaderTitle = styled.h1`
    text-align: center;
`
export const HeaderAuthor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1b1b1b;
`

export const HeaderAuthorProfile = styled.img`
    border-radius: 50%;
    border: 1px solid #eee;
    height: 40px;
`

export const HeaderAuthorName = styled.h3`
    margin-left: 1rem;
    margin-right: 0.5rem;
`

export const HeaderPublished = styled.p`
`