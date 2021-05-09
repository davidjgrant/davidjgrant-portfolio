import React from "react"
import { FaLinkedin, FaDribbble, FaGithub, FaMedium, FaSpotify, FaFileAlt } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
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
                cv {
                    file {
                        url
                    }
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
                    <SocialIconLink href="https://www.linkedin.com/in/davidjohngrant" target="_blank" title="LinkedIn Icon"><FaLinkedin /></SocialIconLink>
                    <SocialIconLink href="https://dribbble.com/davidjohngrant" target="_blank" title="Dribble Icon" ><FaDribbble /></SocialIconLink>
                    <SocialIconLink href="https://github.com/davidjohngrant" target="_blank" title="Github Icon" ><FaGithub /></SocialIconLink>
                    <SocialIconLink href="https://medium.com/@DavidJohnGrant" target="_blank" title="Medium Icon" ><FaMedium /></SocialIconLink>
                    <SocialIconLink href="https://open.spotify.com/user/djgrant_" target="_blank" title="Spotify Icon" ><FaSpotify /></SocialIconLink>
                </SocialIcons>
                <ContactButtons>
                    <CVButton href={data.contentfulHomepageAbout.cv.file.url} target="_blank"><FaFileAlt /><span>CV</span></CVButton>
                    <ContactButton href="mailto:davidgrant132@gmail.com" target="_top"><GrMail /><span>Email</span></ContactButton>
                </ContactButtons>
            </AboutItems>
        </AboutWrapper>
    )
}