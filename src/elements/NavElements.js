import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
        grid-column: 1 / span 7;
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

