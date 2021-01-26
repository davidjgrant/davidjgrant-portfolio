import React from "react"
import { Container, Portfolio, HomepageAbout, HomepageFooter } from "../components"

const Home = () => {

  return (
    <Container>
      <HomepageAbout />
      <HomepageFooter />
      <Portfolio />
    </Container>
  )
}

export default Home