import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { PortfolioWrapper } from "../elements"
import { PortfolioCard, CardImage } from "../components"

export const Portfolio = () => {

  const [color, setColor] = useState(`yellow`);

  const data = useStaticQuery(graphql`
    query {
      projects: allContentfulPortfolio {
        edges {
          node {
            title
            slug
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

return (
    <PortfolioWrapper style={{ backgroundColor: color }}>
      {data.projects.edges.map(edge => (
        <PortfolioCard key={edge.node.slug} color="red" setColor={setColor}>
          <Link to={`/${edge.node.slug}`}>
            <CardImage fluid={edge.node.image.fluid} alt={edge.node.image.description}/>
            <h2>{edge.node.title}</h2>
          </Link>
        </PortfolioCard>
      ))}
    </PortfolioWrapper>
  )
}


