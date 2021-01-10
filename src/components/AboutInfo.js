import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Info } from "../elements"


export const AboutInfo = () => (
  
        <StaticQuery
    query={graphql`
      {
        allContentfulHomepageAbout {
          nodes {
            description {
              description
            }
          }
        }
      }
    `}
    render={data => <Info>{JSON.stringify(data, null, 4)}</Info>}
  />
)