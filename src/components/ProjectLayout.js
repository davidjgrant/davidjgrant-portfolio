import React from 'react'
import { GlobalStyle } from "./styles/globalStyles"

const ProjectLayout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default ProjectLayout
