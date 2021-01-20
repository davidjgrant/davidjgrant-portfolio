import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { PortfolioWrapper } from "../elements"
import PortfolioCard from "./PortfolioCard"

export const Portfolio = () => {

  const [color, setColor] = useState(`yellow`);

return (
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
                  
                }
              }
              slug
            }
          }
        }
      }
    `}

        render={data => {

          return (
            <PortfolioWrapper style={{ backgroundColor: color }}>

              {data.projects.edges.map(edge => (
                  <PortfolioCard key={`${edge.node.slug}`} to={`/${edge.node.slug}`} color="red" setColor={setColor}>
                          <img src={`${edge.node.image.fluid.src}`} alt={`${edge.node.image.description}`}/>
                          <h2>{edge.node.title}</h2>
                  </PortfolioCard>
              ))}
            </PortfolioWrapper>
          )
          
        }}
    />
  )
}


