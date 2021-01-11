import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Info } from "../elements"


export const AboutInfo = () => (
  
        <StaticQuery
    query={graphql`
      {
        allContentfulHomepageAbout {
          edges {
          node {
            description {
              description
            }
          }
        }
        }
      }
    `}
    render={data => (
      <div>
        {data.allContentfulHomepageAbout.edges.map(edge => (
                    <Info>{edge.node.description.description}</Info>
                ))}
      </div>
    )}
  />
)