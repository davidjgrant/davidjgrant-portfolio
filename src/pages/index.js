import React from "react"
import { Container, Portfolio, About, HomepageFooter } from "../components"

const Home = () => {

  return (
    <Container>
      <About />
      <HomepageFooter />
      <Portfolio />
    </Container>
  )
}

export default Home