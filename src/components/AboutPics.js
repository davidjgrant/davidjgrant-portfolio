import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { AboutPicsWrapper, Pictures, Picture1, Picture2 } from "../elements"

export const AboutPics = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulHomepageAbout {
                photo1 {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
                photo2 {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    `)

    return (
        <AboutPicsWrapper>
            <Pictures>
                <Picture1>
                    <Img fluid={data.contentfulHomepageAbout.photo1.fluid} />
                </Picture1>
                    
                <Picture2>
                    <Img fluid={data.contentfulHomepageAbout.photo2.fluid} />
                </Picture2>
            </Pictures>
        </AboutPicsWrapper>
    )
}
