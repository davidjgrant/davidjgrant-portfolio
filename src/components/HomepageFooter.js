import React from "react"
import { HomepageFooterWrapper, FooterItems, FooterItem, FooterLinks, FooterLink } from "../elements"

export const HomepageFooter = () => {

    const currentYear = new Date();
    const year = currentYear.getFullYear();

    return (
        <HomepageFooterWrapper>
            <FooterItems>
                <FooterItem>© {year} <FooterLink to="/">DavidJGrant</FooterLink></FooterItem>
                <FooterLinks>
                    <FooterLink to="/AboutPage">About Me</FooterLink>
                    <FooterLink to="/ContactPage">Contact Me</FooterLink>
                </FooterLinks>
            </FooterItems>       
        </HomepageFooterWrapper>
    )
}