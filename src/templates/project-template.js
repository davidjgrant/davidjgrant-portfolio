import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Header } from "../components"

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
    published(formatString: "Do MMMM, YYYY")
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
        
        <div>
            <Header />
            <div>{documentToReactComponents(project.bodyRichText.json, {
                renderNode: {
                    [BLOCKS.HEADING_1]: (_node, children) => (
                        <h2 style={{ color: "red"}}>{children}</h2>
                    ),
                    [BLOCKS.EMBEDDED_ASSET]: node => (
                        <img
                            src={`${node.data.target.fields.file["en-US"].url}?w=600&q=100`}
                            alt={node.data.target.fields.title["en-US"]}
                        />
                    ),
                },
            })}</div>
            
        </div>
    )
}

export default projectTemplate