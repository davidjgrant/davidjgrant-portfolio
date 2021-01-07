import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export const query = graphql`
  query ($slug: String!) {
    project: contentfulPortfolio(slug: {eq: $slug }) {
        title
    author {
      name
      profile {
        fluid(maxWidth: 100, quality: 75, cropFocus: CENTER) {
          src
        }
      }
    }
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
            <h1>{project.title}</h1>
            <div>
                <p>{project.author.name}</p>
                <img src={`${`${project.author.profile.fluid.src}`}`} alt="David Grants Profile"/>
            </div>
            <p>{project.published}</p>
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