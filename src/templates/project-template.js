import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Header, Project, FeatureImage, ProjectContainer } from "../components"
import { HeaderAuthor, HeaderAuthorName, HeaderAuthorProfile, HeaderPublished, HeaderTitle, HeaderTags, HeaderTag, ProjectSubTitle, ProjectHeadingThree, ProjectImage } from "../elements"

export const query = graphql`
  query ($slug: String!) {
    project: contentfulPortfolio(slug: {eq: $slug }) {
      title
      published(formatString: "MMMM DD, YYYY")
      tags
      author {
        name
        profile {
          fluid(maxWidth: 100, quality: 75, cropFocus: CENTER) {
            src
          }
        }
      }
      featureImage {
        fluid(quality: 100, cropFocus: CENTER) {
            ...GatsbyContentfulFluid
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

  const featureImage = project.featureImage.fluid
  const tags = project.tags

    return (
        
        <ProjectContainer>
            <Header>
              <HeaderTitle>{project.title}</HeaderTitle>
              <HeaderAuthor>
                <HeaderAuthorProfile src={project.author.profile.fluid.src} />
                <HeaderAuthorName>{project.author.name}</HeaderAuthorName>
                <HeaderPublished>· {project.published}</HeaderPublished>
              </HeaderAuthor>
              <HeaderTags>Roles: 
                {tags.map((tag) => (
                  <HeaderTag>{tag} ·</HeaderTag>
                ))}
              </HeaderTags>
            </Header>
            <FeatureImage fluid={featureImage} />
            <Project>
              {documentToReactComponents(project.bodyRichText.json, {
                renderNode: {
                    [BLOCKS.HEADING_2]: (_node, children) => (
                        <ProjectSubTitle>{children}</ProjectSubTitle>
                    ),
                    [BLOCKS.EMBEDDED_ASSET]: node => (
                        <ProjectImage
                            src={`${node.data.target.fields.file["en-US"].url}?q=100`}
                            alt={node.data.target.fields.title["en-US"]}
                            style={{width: "100%", height: "auto"}}
                        />
                    ),
                    [BLOCKS.HEADING_3]: (_node, children) => (
                        <ProjectHeadingThree>{children}</ProjectHeadingThree>
                    ),
                },
              })}
            </Project>
        </ProjectContainer>
    )
}

export default projectTemplate