import React from "react"
import { ProjectContainerWrapper } from "../elements"

export const ProjectContainer = ({children}) => {
    return (
        <ProjectContainerWrapper>
            {children}
        </ProjectContainerWrapper>
    )
}