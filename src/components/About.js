import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { AboutWrapper, AboutItems, ProfileImg, Logo, Info, SocialIcons, SocialIconLink, ContactButtons, CVButton, ContactButton, LinkedIn, Dribbble, Github, Medium, Spotify } from "../elements"

export const About = () => {
    return (
        <AboutWrapper>
            <AboutItems>
                <ProfileImg alt="Profile Picture" title="Profile Picture" />
                <Logo alt="DavidJGrant Logo" title="DavidJGrant Logo" />
                <StaticQuery
                    query={graphql`
                    {
                        contentfulHomepageAbout {
                            description {
                                description
                            }
                        }
                    }
                    `}
                    render={data => (
                        <Info>{data.contentfulHomepageAbout.description.description}</Info>
                    )}
                />
                <SocialIcons>
                    <SocialIconLink href="https://www.linkedin.com/in/davidjohngrant/" target="_blank" title="LinkedIn Icon"><LinkedIn /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Dribble Icon" ><Dribbble /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Github Icon" ><Github /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Medium Icon" ><Medium /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Spotify Icon" ><Spotify /></SocialIconLink>
                </SocialIcons>
                <ContactButtons>
                    <CVButton to="/" target="_blank">CV</CVButton>
                    <ContactButton to="/" target="_blank">Email</ContactButton>
                </ContactButtons>
            </AboutItems>
        </AboutWrapper>
    )
}