import React from 'react'

const ProjectLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default ProjectLayout
