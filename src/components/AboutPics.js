import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { AboutPicsWrapper, Pictures, Picture1, Picture2 } from "../elements"

export const AboutPics = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulHomepageAbout {
                photos {
                    fluid {
                        src
                    }
                }
            }
        }
    `)

    return (
        <AboutPicsWrapper>
            <Pictures>
                {data.contentfulHomepageAbout.photos.map(photo => (
                    <Picture1 src={photo.fluid.src} />
                ))}
            </Pictures>
        </AboutPicsWrapper>
    )
}
