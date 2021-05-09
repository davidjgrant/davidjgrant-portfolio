import React from "react"
import Img from "gatsby-image"
import { CardImageWrapper } from "../elements"

export const CardImage = ({fluid}) => {
    return (
        <CardImageWrapper>
            <Img fluid={fluid} style={{
                width: "100%",
                height: "100%"
            }} />
        </CardImageWrapper>
    )
}