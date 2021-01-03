import React from 'react'
import { GlobalStyle } from "./styles/globalStyles"
import styles from "./styles/projectStyles.css"

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
