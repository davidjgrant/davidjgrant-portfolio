import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Header, Project } from "../components"
import { ProjectSubTitle } from "../elements"

export const query = graphql`
  query ($slug: String!) {
    project: contentfulPortfolio(slug: {eq: $slug }) {
        ...Header
    image {
      fluid {
        src
      }
    }
    bodyRichText {
      json
    }
    seo {
      title
      description {
        description
      }
    }
  }
}
`

const projectTemplate = ({ data: { project } }) => {
    return (
        
        <>
            <Header />
            <Project>
              {documentToReactComponents(project.bodyRichText.json, {
                renderNode: {
                    [BLOCKS.HEADING_1]: (_node, children) => (
                        <ProjectSubTitle>{children}</ProjectSubTitle>
                    ),
                    [BLOCKS.EMBEDDED_ASSET]: node => (
                        <img
                            src={`${node.data.target.fields.file["en-US"].url}?w=600&q=100`}
                            alt={node.data.target.fields.title["en-US"]}
                        />
                    ),
                },
              })}
            </Project>
            
        </>
    )
}

export default projectTemplate