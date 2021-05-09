import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.small}`};
        grid-column: 1 / span 7;
        flex-direction: column;
    }
`

export const NavLogo = styled(Link)`

    img {
        height: 40px;
    }
`

export const IconsWrapper = styled.div`
    display: flex;

    svg {
    height: 2rem;
    width: 2rem;
    margin: 1rem;
    cursor: pointer;
    color: ${props => props.theme.colors.dark2};
    }
`

