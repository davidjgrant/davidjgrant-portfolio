import React from "react"
import { useLocation } from "@reach/router"
import { HomepageFooterWrapper, FooterItems, FooterItem, FooterLinks, FooterLink } from "../elements"

export const HomepageFooter = () => {

    const currentYear = new Date();
    const year = currentYear.getFullYear();
    const location = useLocation();

    

    return (
        <HomepageFooterWrapper>
            <FooterItems>
                <FooterItem>© {year} <FooterLink to="/">DavidJGrant</FooterLink></FooterItem>
                <FooterLinks>
                    {location.pathname !== '/AboutPage' && (<FooterLink to="/AboutPage">About Me</FooterLink>)}
                    {location.pathname !== '/ContactPage' && (<FooterLink to="/ContactPage">Contact Me</FooterLink>)}
                </FooterLinks>
            </FooterItems>       
        </HomepageFooterWrapper>
    )
}