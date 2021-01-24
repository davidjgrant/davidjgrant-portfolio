import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { PortfolioWrapper } from "../elements"
import { PortfolioCard, CardImage } from "../components"

export const Portfolio = () => {

  const [color, setColor] = useState(`linear-gradient(to bottom, rgba(1,255,111,1) 0%, rgba(2,163,72,1) 100%)`);

  const data = useStaticQuery(graphql`
    query {
      projects: allContentfulPortfolio {
        edges {
          node {
            title
            slug
            color
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
    <PortfolioWrapper style={{ background: color }}>
      {data.projects.edges.map(edge => (
        <PortfolioCard key={edge.node.slug} color={edge.node.color} setColor={setColor}>
          <Link to={`/${edge.node.slug}`}>
            <CardImage fluid={edge.node.image.fluid} alt={edge.node.image.description}/>
            <h2>{edge.node.title}</h2>
          </Link>
        </PortfolioCard>
      ))}
    </PortfolioWrapper>
  )
}


