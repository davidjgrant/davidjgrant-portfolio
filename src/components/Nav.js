import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { NavWrapper, NavLogo, IconsWrapper, ClipboardIcon, DarkModeIcon } from "../elements"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulHomepageAbout {
                logo {
                    fluid {
                        src
                        }
                    }
                }
            }
    `)

    return (
        <NavWrapper>
            <NavLogo to="/">
                <img src={data.contentfulHomepageAbout.logo.fluid.src} alt="DavidJGrant Logo" />
            </NavLogo>
            <IconsWrapper>
                <ClipboardIcon />
                <DarkModeIcon />
            </IconsWrapper>
        </NavWrapper>
    )
}
