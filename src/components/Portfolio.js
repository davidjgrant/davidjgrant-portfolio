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