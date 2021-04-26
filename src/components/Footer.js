import React from "react"
import { FooterWrapper, FooterItems, FooterItem, FooterLinks, FooterLink } from "../elements"

export const Footer = () => {

    const currentYear = new Date();
    const year = currentYear.getFullYear();

    return (
        <FooterWrapper>
            <FooterItems>
                <FooterItem>© {year} <FooterLink to="/">DavidJGrant</FooterLink></FooterItem>
                <FooterLinks>
                    <FooterLink to="/AboutPage">About Me</FooterLink>
                    {/* <FooterLink to="/ContactPage">Contact Me</FooterLink> */}
                </FooterLinks>
            </FooterItems> 
        </FooterWrapper>
    )
}
