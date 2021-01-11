import React from "react"
import { StaticQuery, graphql } from "gatsby"

export const Header = () => (
  <StaticQuery
    query={graphql`
      fragment Header on ContentfulPortfolio {
        title
        author {
          name
          profile {
            fluid(maxWidth: 100, quality: 75, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

