import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutWrapper, AboutItems, ProfileImg, Logo, Info, SocialIcons, SocialIconLink, ContactButtons, CVButton, ContactButton, LinkedIn, Dribbble, Github, Medium, Spotify } from "../elements"

export const HomepageAbout = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulHomepageAbout {
                profile {
                    fluid {
                        src
                    }
                }
                logo {
                    fluid {
                        src
                    }
                }
                description {
                    description
                }
            }
        }
    `)


    return (
        <AboutWrapper>
            <AboutItems>
                <ProfileImg src={data.contentfulHomepageAbout.profile.fluid.src} alt="Profile Picture" title="Profile Picture" />
                <Logo src={data.contentfulHomepageAbout.logo.fluid.src} alt="DavidJGrant Logo" title="DavidJGrant Logo" />
                <Info>{data.contentfulHomepageAbout.description.description}</Info>
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