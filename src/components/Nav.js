import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { FaLink } from 'react-icons/fa';
// import { CgDarkMode } from "react-icons/cg";
import { NavWrapper, NavLogo, IconsWrapper } from "../elements"

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
    `);
    
    return (
        <NavWrapper>
            <NavLogo to="/">
                <img src={data.contentfulHomepageAbout.logo.fluid.src} alt="DavidJGrant Logo" />
            </NavLogo>
            <IconsWrapper>
                {/*<FaLink onClick={() =>  navigator.clipboard.writeText(url)} title="Copy URL to Clipboard" />
                 <CgDarkMode title="Switch to Dark Mode" /> */}
            </IconsWrapper>
        </NavWrapper>
    )
}
