import React from "react"
import { Link, graphql } from 'gatsby'
import Container from '../components/Container'
import Portfolio from "../components/Portfolio"

export default function Home({ data }) {
  return (
    <Container>
      <Portfolio>
        {data.projects.nodes.map(project => (
                <div className="projects" key={`${project.slug}`}>
                    <Link to={`/${project.slug}`}>
                        <img src={`${project.image.fluid.src}`} alt={`${project.image.description}`}/>
                        <h2>{project.title}</h2>
                    </Link>
                </div>
            ))}
      </Portfolio>
    </Container>
  )
}

export const query = graphql`
  {
    projects: allContentfulPortfolio {
    nodes {
      ...project
      id
    }
  }
}
`;