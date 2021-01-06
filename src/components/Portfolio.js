import React from 'react'
import { PortfolioWrapper } from '../elements'

export const Portfolio = ( {children} ) => {

    return (
        <PortfolioWrapper>
             {children}
        </PortfolioWrapper>
    )
}
export default Portfolio

export const query = graphql`
  fragment project on ContentfulPortfolio {
  title
  image {
    fluid {
      src
    }
    description
  }
  slug
}
`;