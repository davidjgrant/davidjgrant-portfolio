import React from "react"
import { HomepageFooterWrapper, FooterItems, FooterItem, FooterLinks, FooterLink } from "../elements"

export const HomepageFooter = () => {
    return (
        <HomepageFooterWrapper>
            <FooterItems>
                <FooterItem>© 2021 <FooterLink to="/">DavidJGrant</FooterLink></FooterItem>
                <FooterLinks>
                    <FooterLink to="/AboutPage">About Me</FooterLink>
                    <FooterLink to="/ContactPage">Contact Me</FooterLink>
                </FooterLinks>
            </FooterItems>       
        </HomepageFooterWrapper>
    )
}