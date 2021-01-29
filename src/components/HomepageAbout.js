import React from "react"
import { FaLinkedin, FaDribbble, FaGithub, FaMedium, FaSpotify } from 'react-icons/fa';
import { GrDocumentDownload, GrMail } from "react-icons/gr";
import { useStaticQuery, graphql } from "gatsby"
import { AboutWrapper, AboutItems, ProfileImg, Logo, Info, SocialIcons, SocialIconLink, ContactButtons, CVButton, ContactButton } from "../elements"


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
                    <SocialIconLink href="https://www.linkedin.com/in/davidjohngrant/" target="_blank" title="LinkedIn Icon"><FaLinkedin /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Dribble Icon" ><FaDribbble /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Github Icon" ><FaGithub /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Medium Icon" ><FaMedium /></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" title="Spotify Icon" ><FaSpotify /></SocialIconLink>
                </SocialIcons>
                <ContactButtons>
                    <CVButton to="/" target="_blank"><GrMail /><span>CV</span></CVButton>
                    <ContactButton to="/" target="_blank"><GrDocumentDownload /><span>Email</span></ContactButton>
                </ContactButtons>
            </AboutItems>
        </AboutWrapper>
    )
}