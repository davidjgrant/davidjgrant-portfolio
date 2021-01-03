import React from 'react'
import { GlobalStyle } from "./styles/globalStyles"
import "./styles/homepageStyles.css"

const HomepageLayout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <main>{children}</main>
        </>
    )
}

export default HomepageLayout
