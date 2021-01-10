import React from "react"
import { Link } from "gatsby"
import { HomepageFooterWrapper, FooterItems, FooterItem, FooterLinks, FooterLink } from "../elements"

export const HomepageFooter = () => {
    return (
        <HomepageFooterWrapper>
            <FooterItems>
                <FooterItem>© 2019–2021 DavidJGrant</FooterItem>
                <FooterLinks>
                    <FooterLink><Link to="/AboutPage">About Me</Link></FooterLink>
                    <FooterLink><Link to="/ContactPage">Contact Me</Link></FooterLink>
                </FooterLinks>
            </FooterItems>       
        </HomepageFooterWrapper>
    )
}