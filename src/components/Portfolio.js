import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { PortfolioWrapper } from "../elements"

export const Portfolio = () => (
  <StaticQuery
    query={ graphql`
      query PortfolioQuery {
        projects: allContentfulPortfolio {
          edges {
            node {
              title
              image {
                fluid(maxWidth: 350, resizingBehavior: FILL, quality: 75, cropFocus: CENTER) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
              slug
            }
          }
        }
      }
    `}
        render={data => (
          <PortfolioWrapper>
            {data.projects.edges.map(edge => (
                <div key={`${edge.node.slug}`}>
                    <Link to={`/${edge.node.slug}`}>
                        <img src={`${edge.node.image.fluid.src}`} alt={`${edge.node.image.description}`}/>
                        <h2>{edge.node.title}</h2>
                    </Link>
                </div>
            ))}
          </PortfolioWrapper>
        )}
  />
)