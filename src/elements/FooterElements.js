import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row: 5;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
        grid-column: 1 / span 7;
    }

    display: flex;
    justify-content: center;
    text-align: center;
`

export const FooterItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media ${props => props.theme.breakpoints.mobile} {
        flex-direction: column;
    }
`
export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;

    @media ${props => props.theme.breakpoints.mobile} {
        margin-top: 10px;
    }
`

export const FooterItem = styled.div`

`

export const FooterLink = styled(Link)`
    margin: 0 10px;
    text-decoration: none;
    color: 111;
`
