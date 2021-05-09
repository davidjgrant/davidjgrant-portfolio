import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: grid;
    grid-column: 2 / span 12;
    grid-row: 2;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 7;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.xSmall}`};
        grid-column: 1 / span 8;
    }
`

export const HeaderTitle = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
`
export const HeaderAuthor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1b1b1b;

    @media ${props => props.theme.breakpoints.mobile} {
        margin-bottom: 1rem;
    }
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

export const HeaderTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    list-style-type: none;
    margin: auto 0 2rem 0;
    font-weight: 600;
    line-height: 1.5;
`

export const HeaderTag = styled.li`
    margin: 0px 0.25rem;
    text-decoration: none;
    font-weight: 400;
`