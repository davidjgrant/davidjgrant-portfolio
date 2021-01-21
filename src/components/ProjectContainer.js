import React from "react"
import { ProjectContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

export const ProjectContainer = ({children}) => {
    return (
        <ProjectContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ProjectContainerWrapper>
    )
}