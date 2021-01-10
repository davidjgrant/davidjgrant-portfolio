import React from "react"
import { AboutInfo } from "./AboutInfo"
import { AboutWrapper, AboutItems, ProfileImg, Logo, SocialIcons, SocialIconLink, ContactButtons, CVButton, ContactButton, LinkedIn, Dribbble, Github, Medium, Spotify } from "../elements"

export const About = () => {
    return (
        <AboutWrapper>
            <AboutItems>
                <ProfileImg />
                <Logo />
                <AboutInfo />
                <SocialIcons>
                    <SocialIconLink href="https://www.linkedin.com/in/davidjohngrant/" target="_blank"><LinkedIn /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"><Dribbble /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"><Github /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"><Medium /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank"><Spotify /></SocialIconLink>
                </SocialIcons>
                <ContactButtons>
                    <CVButton target="_blank">CV</CVButton>
                    <ContactButton target="_blank">Contact Me</ContactButton>
                </ContactButtons>
            </AboutItems>
        </AboutWrapper>
    )
}