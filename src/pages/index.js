import React from "react"
import { Link, graphql } from 'gatsby'
import HomepageLayout from "../components/HomepageLayout"
import SEO from "../components/SEO"
import About from "../components/About"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

export default function Home({ data }) {
  return (
    <HomepageLayout>
      <SEO title="Home" />
      <About />
      <Footer />
      <Projects>
        {data.projects.nodes.map(project => (
                <div key={`${project.slug}`}>
                    <Link to={`/${project.slug}`}>
                        <h2>{project.title}</h2>
                        <img src={`${project.image.fluid.src}`} alt={`${project.image.description}`}/>
                    </Link>
                </div>
            ))}
      </Projects>
    </HomepageLayout>
  )
}

export const query = graphql`
  {
    projects: allContentfulPortfolio {
        nodes {
        title
        image {
            fluid {
            src
            }
        }
        slug
        }
    }
  }
`;