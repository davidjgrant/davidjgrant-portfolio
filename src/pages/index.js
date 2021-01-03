import React from "react"
import HomepageLayout from "../components/HomepageLayout"
import SEO from "../components/SEO"
import About from "../components/About"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <HomepageLayout>
      <SEO title="Home" />
      <About />
      <Footer />
      <Projects />
    </HomepageLayout>
  )
}
