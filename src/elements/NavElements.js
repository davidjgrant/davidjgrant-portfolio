import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row: 1;

    display: flex;
    justify-content: center;
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

`

export const IconsWrapper = styled.div`

`

export const ClipboardIcon = styled.div`

`

export const DarkModeIcon = styled.div`

`


