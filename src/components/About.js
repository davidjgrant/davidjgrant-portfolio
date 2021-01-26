import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { AboutWrapper, AboutInfo, ProfileImg, AboutInfoWrapper } from "../elements"
 
export const About = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulHomepageAbout {
                profile {
                    fluid {
                        src
                    }
                }
                longDescription {
                    longDescription
                }
            }
        }
    `)

    return (
        <AboutWrapper>
            <AboutInfoWrapper>
                <ProfileImg src={data.contentfulHomepageAbout.profile.fluid.src} alt="Profile Picture" title="Profile Picture" />
                <AboutInfo>{data.contentfulHomepageAbout.longDescription.longDescription}</AboutInfo>
            </AboutInfoWrapper>
        </AboutWrapper>
    )
}
