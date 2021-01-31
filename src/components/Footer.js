import React from "react"
import { FooterWrapper, FooterItems, FooterItem, FooterLinks, FooterLink } from "../elements"

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterItems>
                <FooterItem>© 2021 DavidJGrant</FooterItem>
                <FooterLinks>
                    <FooterLink to="/AboutPage">About Me</FooterLink>
                    <FooterLink to="/ContactPage">Contact Me</FooterLink>
                    <FooterLink to="/" exact>Portfolio</FooterLink>
                </FooterLinks>
            </FooterItems> 
        </FooterWrapper>
    )
}
