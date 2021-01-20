import React from "react"
import { Card } from "../elements"

function PortfolioCard({color, setColor, children}) {

    return(
        <Card
            // className={color}
            onMouseOver={() => {
          setColor(color);
        }}>{children}</Card>
        )
}
export default PortfolioCard;