import React from "react"
import { Card } from "../elements"

export function PortfolioCard({color, setColor, children}) {

    return(
        <Card
            onMouseOver={() => {setColor(color);}}>{children}
        </Card>
        )
}