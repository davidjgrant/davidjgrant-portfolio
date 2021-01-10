import styled from "styled-components"
import { Link } from "gatsby"

export const HomepageFooterWrapper = styled.footer`
    display: flex;
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #bada55;

    @media ${props => props.theme.breakpoints.wide} {
        grid-column: 2;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1;
        grid-row: 2;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 3;
    }
`;

export const FooterItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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
`